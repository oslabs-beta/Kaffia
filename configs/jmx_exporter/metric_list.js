// list of metrics user can choose from with their corresponding
// jmx-exporter metrics to be exposed to prometheus
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
    queue_time: ['kafka.network:type=RequestMetrics,*'],
    time_placeholder: ['kafka.network:type=RequestMetrics,*'],
  },
  broker_zookeeper: {
    zookeeper_metrics: [
      'kafka.server:type=SessionExpireListener,*',
      'kafka.server:type=KafkaServer,name=BrokerState',
    ],
  },
  cluster_healthcheck: {
    core_healthcheck: [
      'kafka.controller:*',
      'kafka.server:type=ReplicaManager,*',
      'kafka.cluster:*',
      'kafka.server:type=KafkaServer,name=BrokerState',
      'kafka.network:type=RequestMetrics,*',
    ],
    throughput_io: ['kafka.server:type=BrokerTopicMetrics,*'],
    isr_count_change: ['kafka.server:type=ReplicaManager,*'],
    leaders_partitions: [
      'kafka.controller:*',
      'kafka.server:type=ReplicaManager,*',
    ],
  },
  cluster_replication: {
    replication_io: ['kafka.server:type=BrokerTopicMetrics,*'],
    replication_lag: ['kafka.server:type=ReplicaFetcherManager,*'],
    replica_fetcher: ['kafka.server:type=FetcherStats,*'],
  },
  topics_logs: {
    log_info: [
      'kafka.log:*',
      'kafka.cluster:*',
      'kafka.server:type=BrokerTopicMetrics,*',
    ],
  },
};
