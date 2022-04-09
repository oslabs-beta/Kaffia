const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const grafanaPanels = require('./grafana/templates/panels_template.js');
const jmxMetrics = require('./jmx_exporter/metric_list.js');

/**
 * dockerConfigGenerator creates a yaml file for a multi-container Docker application
 * that uses Grafana, Prometheus, jmx-exporter, and Kafka to create a self-monitoring
 * cluster.
 * @param brokerCount: user-specified number of Kafka brokers
 * @returns void
 *
 */

const dockerConfigGenerator = (brokerCount) => {
  try {
    // load in the multi-container Docker yaml template
    const dockerConfig = yaml.load(
      fs.readFileSync(
        path.join(__dirname, './docker/docker_multiple_nodes_template.yml'),
        'utf8'
      )
    );

    // define the properties for the jmx-exporter and Kafka cluster services
    // that are the same in each cluster
    let jmxConfig = {
      image: 'sscaling/jmx-prometheus-exporter',
      environment: {
        CONFIG_YML: '/../jmx_exporter/config.yml',
        JVM_OPTS: '-Xmx512M',
      },
    };
    let kafkaConfig = {
      image: 'confluentinc/cp-kafka:latest',
      depends_on: ['zk1'],
      environment: {
        KAFKA_ZOOKEEPER_CONNECT: 'zookeeper1:2181',
        KAFKA_LISTENER_SECURITY_PROTOCOL_MAP:
          'PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT',
        KAFKA_INTER_BROKER_LISTENER_NAME: 'PLAINTEXT',
        CONFLUENT_METRICS_REPORTER_ZOOKEEPER_CONNECT: 'zookeeper1:2181',
        CONFLUENT_METRICS_REPORTER_TOPIC_REPLICAS: 1,
        CONFLUENT_METRICS_ENABLE: 'false',
        KAFKA_HEAP_OPTS: '-Xmx512M -Xms512M',
      },
    };

    // generate the unique, cluster-specific properties for the jmx-exporter
    // and Kafka services according to the user's preferred broker count
    for (let i = 0; i < brokerCount; i++) {
      jmxConfig = {
        ...jmxConfig,
        ports: [`${5556 + i}:5556`],
        volumes: [
          `../jmx_exporter/config_kafka10${
            i + 1
          }.yml:/../jmx_exporter/config.yml`,
        ],
        container_name: `jmx-kafka${101 + i}`,
        depends_on: [`kafka${101 + i}`],
      };
      dockerConfig.services[`jmx-kafka${101 + i}`] = jmxConfig;

      kafkaConfig = {
        ...kafkaConfig,
        ports: [`909${i + 1}:909${i + 1}`, `999${i + 1}:999${i + 1}`],
        container_name: `kafka${101 + i}`,
        environment: {
          ...kafkaConfig.environment,
          KAFKA_BROKER_ID: 101 + i,
          KAFKA_JMX_PORT: 9991 + i,
          KAFKA_ADVERTISED_LISTENERS: `PLAINTEXT://kafka10${
            i + 1
          }:29092,PLAINTEXT_HOST://localhost:909${i + 1}`,
          KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR:
            brokerCount < 3 ? brokerCount : 3,
          KAFKA_TRANSACTION_STATE_LOG_REPLICATION_FACTOR:
            brokerCount < 3 ? brokerCount : 3,
          CONFLUENT_METRICS_REPORTER_BOOTSTRAP_SERVERS: `kafka10${i + 1}:29092`,
        },
      };
      dockerConfig.services[`kafka${101 + i}`] = kafkaConfig;
    }

    // after adding the required services for each broker, save the completed template
    // to a filepath that will then be used to launch the Docker app
    fs.writeFileSync(
      path.join(__dirname, './docker/docker_multiple_nodes.yml'),
      yaml.dump(dockerConfig, { noRefs: true })
    );
  } catch (e) {
    console.log(e);
  }
};

/**
 * promConfigGenerator creates a yaml file for a multi-container Docker application
 * to enable Prometheus monitoring of the jmx-exporter exposing Kafka metrics
 * @param brokerCount: user-specified number of Kafka brokers
 * @returns void
 *
 */

const promConfigGenerator = (brokerCount) => {
  try {
    // read in prometheus.yml template file and add jmx-exporter ports depending on
    // the user's preferred number of Kafka brokers
    const promConfig = yaml.load(
      fs.readFileSync(
        path.join(__dirname, 'prometheus/prometheus_template.yml'),
        'utf8'
      )
    );
    const promTargets = [];
    for (let i = 0; i < brokerCount; i++) {
      promTargets.push(`jmx-kafka10${i + 1}:5556`);
    }

    // add ports to scrape to the yml file and save changes into completed yml file
    promConfig.scrape_configs[0].static_configs[0].targets = promTargets;
    fs.writeFileSync(
      path.join(__dirname, 'prometheus/prometheus.yml'),
      yaml.dump(promConfig, { noRefs: true })
    );
  } catch (e) {
    console.log(e);
  }
};

/**
 * promConfigGenerator creates multiple yaml files for the jmx-exporters to only
 * expose the metrics that the user would like to view. Additionally, the method
 * constructs Grafana dashboards using those user-specified metrics.
 * @param brokerCount: user-specified number of Kafka brokers
 * @returns void
 *
 */

const jvmGrafanaConfigGenerator = (brokerCount, userMetrics) => {
  // create Grafana dashboard folder if it does not already exist
  if (!fs.existsSync(path.join(__dirname, 'grafana/dashboards'))) {
    fs.mkdirSync(path.join(__dirname, 'grafana/dashboards'));
  }
  // delete existing dashboards from previous cluster creation, which may have different settings
  const existingDashboards = fs.readdirSync(
    path.join(__dirname, 'grafana/dashboards')
  );
  existingDashboards.forEach((dashboard) => {
    fs.unlinkSync(path.join(__dirname, 'grafana/dashboards', dashboard));
  });

  // load template for jmx-exporter to add specific metrics to whtielist
  const config_kafka_template = yaml.load(
    fs.readFileSync(
      path.join(__dirname, 'jmx_exporter/config_kafka_template.yml'),
      'utf8'
    )
  );
  const whitelist = new Set();

  // loop through each user-selected dashboard to add panels to Prometheus file
  for (const dashboard in userMetrics) {
    // grab Grafana file corresponding to selected dashboard
    const grafanaFile = JSON.parse(
      fs.readFileSync(
        path.join(__dirname, `grafana/templates/${dashboard}.json`),
        'utf-8'
      )
    );
    // add jmx-exporter metric to whitelist to scrape that item
    // add panel to Grafana dashboard
    for (const panel of userMetrics[dashboard]) {
      jmxMetrics[dashboard][panel].forEach(whitelist.add, whitelist);
      grafanaFile.panels.push(...grafanaPanels[dashboard][panel]);
    }
    fs.writeFileSync(
      path.join(__dirname, `./grafana/dashboards/${dashboard}.json`),
      JSON.stringify(grafanaFile),
      { noRefs: true }
    );
  }
  config_kafka_template.whitelistObjectNames = [...whitelist];

  // save jmx-exporter config files with correct ports
  for (let i = 0; i < brokerCount; i++) {
    config_kafka_template.hostPort = `kafka10${i + 1}:999${i + 1}`;
    fs.writeFileSync(
      path.join(__dirname, `./jmx_exporter/config_kafka10${i + 1}.yml`),
      yaml.dump(config_kafka_template, { noRefs: true })
    );
  }
};

module.exports = (brokerCount, metrics) => {
  // run all three config methods each time user submits form with preferences
  console.log('metrics');
  console.log(metrics);
  promConfigGenerator(brokerCount);
  jvmGrafanaConfigGenerator(brokerCount, metrics);
  dockerConfigGenerator(brokerCount);
};

const options = {
  broker_hard_disk_usage: ['global_topics_size', 'log_size_per_broker'],
  broker_jvm_os: [
    'memory_usage',
    'garbage_collection',
    'cpu_usage',
    'open_file_descriptors',
    'available_memory',
  ],
  broker_performance: [
    'request_total_time',
    'idle_percent',
    'request_rate',
    'queue_size',
    'queue_time',
    'time_placeholder',
  ],
  broker_zookeeper: ['zookeeper_metrics'],
  cluster_healthcheck: [
    'core_healthcheck',
    'throughput_io',
    'isr_count_change',
    'leaders_partitions',
  ],
  cluster_replication: ['replication_io', 'replication_lag', 'replica_fetcher'],
  topics_logs: ['log_info'],
};
