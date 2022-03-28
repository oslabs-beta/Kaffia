const fs = require('fs');
const yml = require('js-yaml');

export default function (brokers) {
  try {
    const ymlFile = yml.load(fs.readFileSync('/output/dockerConfig', 'utf8'));
  } catch (err) {
    console.log(err);
  }
  for (let i = 1; i <= brokers; i++) {
    const jmxService = {
      image: 'sscaling/jmx-prometheus-exporter',
      ports: ['5556:5556'],
      environment: {
        CONFIG_YML: '/etc/jmx_exporter/config.yml',
        JVM_OPTS: '-Xmx512M',
      },
      volumes: [
        './etc/jmx_exporter/config_kafka101.yml:/etc/jmx_exporter/config.yml',
      ],
      container_name: 'jmx-kafka101',
      depends_on: ['kafka101'],
    };
    const kafkaService = {
      image: 'confluentinc/cp-kafka:latest',
      depends_on: ['zk1'],
      ports: ['9091:9091', '9991:9991'],
      container_name: 'kafka101',
      environment: {
        KAFKA_BROKER_ID: 101,
        KAFKA_JMX_PORT: 9991,
        KAFKA_ZOOKEEPER_CONNECT: 'zookeeper1:2181',
        KAFKA_ADVERTISED_LISTENERS:
          'PLAINTEXT://kafka101:29092,PLAINTEXT_HOST://localhost:9091',
        KAFKA_LISTENER_SECURITY_PROTOCOL_MAP:
          'PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT',
        KAFKA_INTER_BROKER_LISTENER_NAME: 'PLAINTEXT',
        KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1,
        KAFKA_TRANSACTION_STATE_LOG_REPLICATION_FACTOR: 1,
        CONFLUENT_METRICS_REPORTER_BOOTSTRAP_SERVERS: 'kafka101:29092',
        CONFLUENT_METRICS_REPORTER_ZOOKEEPER_CONNECT: 'zookeeper1:2181',
        CONFLUENT_METRICS_REPORTER_TOPIC_REPLICAS: 1,
        CONFLUENT_METRICS_ENABLE: 'false',
        KAFKA_HEAP_OPTS: '-Xmx512M -Xms512M',
      },
    };
    ymlFile.services[`jmx-kafka${i}`] = jmxService;
    ymlFile.services[`kafka${i}`] = kafkaService;
  }
}
