module.exports = {
  broker_hard_disk_usage: {
    global_topics_size: ['kafka.log:*', 'kafka.cluster:*'],
    log_size_per_broker: ['kafka.log:*'],
  },
  broker_jvm_os: {
    memory_usage: ['java.lang:*'],
    garbage_collection: ['java.lang:*'],
    cpu_usage: ['java.lang:*'],
    open_file_descriptors: ['java.lang:*'],
    available_memory: ['java.lang:*'],
  },
  broker_performance: {
    request_total_time: ['kafka.network:type=RequestMetrics,*'],
    idle_percent: [
      'kafka.network:type=SocketServer,*',
      'kafka.server:type=KafkaRequestHandlerPool,*',
    ],
    request_rate: ['kafka.network:type=RequestMetrics,*'],
    queue_size: ['kafka.network:type=RequestChannel,*'],
  },
  broker_zookeeper: {},
  cluster_healthcheck: {},
  cluster_replication: {},
  topics_logs: {},
};
