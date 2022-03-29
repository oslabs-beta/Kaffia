const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');


console.log('hello_from_function');
// take in number of brokers to launch
module.exports = (brokerCount) => {
    try {
        const config = yaml.load(fs.readFileSync(path.join(__dirname, './configs/docker_multiple_nodes_template.yml'), 'utf8'));
        
        let jmxConfig = { 
            image: 'sscaling/jmx-prometheus-exporter',
            ports: [ '5556:5556' ],
            environment: { 
                CONFIG_YML: '/etc/jmx_exporter/config.yml',
                JVM_OPTS: '-Xmx512M' 
            },
            volumes: [ './etc/jmx_exporter/config_kafka101.yml:/etc/jmx_exporter/config.yml' ],
            container_name: 'jmx-kafka101',
            depends_on: [ 'kafka101' ] 
        }
        let kafkaConfig = { 
            image: 'confluentinc/cp-kafka:latest',
            depends_on: [ 'zk1' ],
            ports: [ '9091:9091', '9991:9991' ],
            container_name: 'kafka101',
            environment: { KAFKA_BROKER_ID: 101,
            KAFKA_JMX_PORT: 9991,
            KAFKA_ZOOKEEPER_CONNECT: 'zookeeper1:2181',
            KAFKA_ADVERTISED_LISTENERS: 'PLAINTEXT://kafka101:29092,PLAINTEXT_HOST://localhost:9091',
            KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: 'PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT',
            KAFKA_INTER_BROKER_LISTENER_NAME: 'PLAINTEXT',
            KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1,
            KAFKA_TRANSACTION_STATE_LOG_REPLICATION_FACTOR: 1,
            CONFLUENT_METRICS_REPORTER_BOOTSTRAP_SERVERS: 'kafka101:29092',
            CONFLUENT_METRICS_REPORTER_ZOOKEEPER_CONNECT: 'zookeeper1:2181',
            CONFLUENT_METRICS_REPORTER_TOPIC_REPLICAS: 1,
            CONFLUENT_METRICS_ENABLE: 'false',
            KAFKA_HEAP_OPTS: '-Xmx512M -Xms512M' 
            } 
        }
        console.log(Number(`${9092} :${9094}`))
        for (let i = 0; i < brokerCount; i++) {
            jmxConfig = {
                ...jmxConfig,
                image: `sscaling/jmx-prometheus-exporter${[]}`,
                ports : [ `${5556+i}:5556` ],
                container_name : `jmx-kafka${101+i}`,
                depends_on : [ `kafka${101+i}` ],
            }
            config.services[`jmx-kafka${101+i}`] = jmxConfig;

            kafkaConfig = {
                ...kafkaConfig,
                ports: [ `909${i+1}:909${i+1}`, `999${i+1}:999${i+1}` ],
                // ports: [ Number(`${9092} :${9094}`)],
                // ports: [ 9090 + i + 1:9090 + i + 1, 9990 +  i + 1:9990 + i + 1 ],
                // ports: [9091],
                container_name: `kafka${101+i}`,
                environment: {
                    ...kafkaConfig.environment,
                    KAFKA_BROKER_ID: 101 + i,
                    KAFKA_JMX_PORT: 9991+i,
                    KAFKA_ADVERTISED_LISTENERS: `PLAINTEXT://kafka10${i+1}:29092,PLAINTEXT_HOST://localhost:909${i+1}`,
                    KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: brokerCount < 3 ? brokerCount : 3,
                    KAFKA_TRANSACTION_STATE_LOG_REPLICATION_FACTOR: brokerCount < 3 ? brokerCount : 3,
                    CONFLUENT_METRICS_REPORTER_BOOTSTRAP_SERVERS: `kafka10${i+1}:29092`
                }
            }
            config.services[`kafka${101+i}`] = kafkaConfig;
        }

        // write to file if file doesnt exist
        try {
            // if exists
        } catch(e) {
            // if already exists
        }
        // fs.writeFileSync(path.join(__dirname, `./configs/config_kafka${100 + brokerCount}.yml`), yaml.safeDump(config));
        fs.writeFileSync(path.join(__dirname, `./configs/docker_multiple_nodes.yml`), yaml.dump(config,{noRefs: true}));  
    } catch(e) {
        console.log(e);
    }
}
