const yaml = require('js-yaml');
const fs = require('fs');

const grafanaPanels = require('./grafana/templates/panels_template.js');
const jmxMetrics = require('./jmx_exporter/metric_list.js');

/**
 * dockerConfigGenerator creates a yaml file for a multi-container Docker application
 * that uses Grafana, Prometheus, jmx-exporter, and Kafka to create a self-monitoring
 * cluster.
 * @param brokerCount
 * @returns void
 *
 */

const dockerConfigGenerator = (brokerCount: number) => {
  try {
    const dockerConfig = yaml.load(
      fs.readFileSync(
        path.join(__dirname, './docker/docker_multiple_nodes_template.yml'),
        'utf8'
      )
    );

    const jmxTemplate = {
      image: 'sscaling/jmx-prometheus-exporter',
      environment: {
        CONFIG_YML: '/../jmx_exporter/config.yml',
        JVM_OPTS: '-Xmx512M',
      },
    };
    const kafkaTemplate = {
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

    for (let i = 0; i < brokerCount; i++) {
      const jmxConfig = {
        ...jmxTemplate,
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

      const kafkaConfig = {
        ...kafkaTemplate,
        ports: [`909${i + 1}:909${i + 1}`, `999${i + 1}:999${i + 1}`],
        container_name: `kafka${101 + i}`,
        environment: {
          ...kafkaTemplate.environment,
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

    fs.writeFileSync(
      path.join(__dirname, './docker/docker_multiple_nodes.yml'),
      yaml.dump(dockerConfig, { noRefs: true })
    );
  } catch (e) {
    console.log(e);
  }
};

/**
 *
 * @param brokerCount
 * @returns void
 *
 */

const promConfigGenerator = (brokerCount: number) => {
  try {
    const promConfig = yaml.load(
      fs.readFileSync(
        path.join(__dirname, './prometheus/prometheus.yml'),
        'utf8'
      )
    );

    const promTargets = [];
    for (let i = 0; i < brokerCount; i++) {
      promTargets.push(`jmx-kafka10${i + 1}:5556`);
    }

    promConfig.scrape_configs[0].static_configs[0].targets = promTargets;

    fs.writeFileSync(
      path.join(__dirname, './prometheus/prometheus.yml'),
      yaml.dump(promConfig, { noRefs: true })
    );
  } catch (e) {
    console.log(e);
  }
};

const metricConfigurator = (
  brokerCount?: number,
  metric?: { [key: string]: string[] }
) => {
  // jmx config, yaml file
  const config_kafka_template = yaml.load(
    fs.readFileSync(
      path.join(__dirname, 'jmx_exporter/config_kafka_template.yml'),
      'utf8'
    )
  );
  // broker dashboard template, JSON file
  const broker_hard_disk_usage = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, 'grafana/templates/broker_hard_disk_usage.json'),
      'utf-8'
    )
  );

  // for (const dashboard in metric) {
  //   for (const panel of metric[dashboard]) {
  //     config_kafka_template.whitelist.push(
  //       jmxMetrics[dashboard][panel].whitelist
  //     );
  //     config_kafka_template.rules.push(jmxMetrics[dashboard][panel].rules);
  //     broker_hard_disk_usage.panels.push(...grafanaPanels[dashboard][panel]);
  //   }
  // }
  console.log(config_kafka_template);
  console.log(broker_hard_disk_usage);
};

module.exports = (brokerCount: number) => {
  if (brokerCount > 1) dockerConfigGenerator(brokerCount);
  promConfigGenerator(brokerCount);
  metricConfigurator(1, {
    broker_hard_disk_usage: ['global_topics_size', 'log_size_per_broker'],
  });
};
