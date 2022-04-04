export default {
  broker_hard_disk_usage: {
    global_topics_size: {
      whitelist: ['kafka.log:*', 'kafka.cluster:*'],
      rules: {
        pattern:
          'kafka.log<type=Log, name=([^,]+), topic=([^,]+), partition=([^,]+)><>Value',
        name: 'kafka_log_$1',
        labels: {
          topic: '$2',
          partition: '$3',
          service: 'kafka-broker',
          env: 'cluster-demo',
        },
      },
    },
    log_size_per_broker: {
      whitelist: ['kafka.log:*'],
      rules: {
        pattern:
          'kafka.log<type=Log, name=([^,]+), topic=([^,]+), partition=([^,]+)><>Value',
        name: 'kafka_log_$1',
        labels: {
          topic: '$2',
          partition: '$3',
          service: 'kafka-broker',
          env: 'cluster-demo',
        },
      },
    },
  },
};
