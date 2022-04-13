export default {
  broker_hard_disk_usage: {
    global_topics_size: {
      globalTopicsSizeIncludingReplicas:
        'http://localhost:3000/d-solo/zApgMBbik/kafka-hard-disk-usage?orgId=1&refresh=5s&from=now-1h&to=now&panelId=2',
      globalTopicsSizeWithoutReplicas:
        'http://localhost:3000/d-solo/zApgMBbik/kafka-hard-disk-usage?orgId=1&refresh=5s&from=now-1h&to=now&panelId=5',
    },
    log_size_per_broker: {
      logSizePerBrokerIncludingReplicas:
        'http://localhost:3000/d-solo/zApgMBbik/kafka-hard-disk-usage?orgId=1&refresh=5s&from=now-1h&to=now&panelId=3',
    },
  },
  broker_jvm_os: {
    open_file_descriptors: {
      openFileDescriptors:
        'http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=now-1h&to=now&panelId=2',
    },
    memory_usage: {
      jvmMemUsedNonheap:
        'http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=now-1h&to=now&panelId=6',
      jvmMemUsedHeap:
        'http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=now-1h&to=now&panelId=6',
    },
    garbage_collection: {
      garbageCollectionProcessTime:
        'http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=now-1h&to=now&panelId=10',
    },
    available_memory: {
      freePhysicalMemory:
        'http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=now-1h&to=now&panelId=13',
      availableVirtualMemory:
        'http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=now-1h&to=now&panelId=14',
    },
    cpu_usage: {
      cpu: 'http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=now-1h&to=now&panelId=4',
      processCpu:
        'http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=now-1h&to=now&panelId=11',
    },
  },
  broker_performance: {
    request_total_time: {
      requestTotalTime:
        'http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?orgId=1&refresh=5s&from=now-1h&to=now&panelId=1',
    },
    queue_size: {
      responseQueueSize:
        'http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?orgId=1&refresh=5s&from=now-1h&to=now&panelId=10',
      requestQueueSize:
        'http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?from=now-1h&to=now&orgId=1&panelId=9',
    },
    idle_percent: {
      networkSocketAvgIdlePercent:
        'http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?orgId=1&refresh=5s&from=now-1h&to=now&panelId=16',
      requestHandlerAvgIdlePercent:
        'http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?from=now-1h&to=now&orgId=1&panelId=15',
    },
    queue_time: {
      requestQueueTime:
        'http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?orgId=1&refresh=5s&from=now-1h&to=now&panelId=2',
      responseQueueTime:
        'http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?orgId=1&refresh=5s&from=now-1h&to=now&panelId=2',
    },
    request_rate: {
      requestPerSec:
        'http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?orgId=1&refresh=5s&from=now-1h&to=now&panelId=12',
    },
    time_placeholder: {
      throttleTime:
        'http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?orgId=1&refresh=5s&from=now-1h&to=now&panelId=5',
      localTime:
        'http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?orgId=1&refresh=5s&from=now-1h&to=now&panelId=3',
      responseSendTime:
        'http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?orgId=1&refresh=5s&from=now-1h&to=now&panelId=7',
      remoteTime:
        'http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?orgId=1&refresh=5s&from=now-1h&to=now&panelId=4',
    },
  },
  broker_zookeeper: {
    zookeeper_metrics: {
      zkSyncConnectsPerSec:
        'http://localhost:3000/d-solo/142Xi34mk/kafka-broker-zookeeper-connection?orgId=1&refresh=5s&from=now-1h&to=now&panelId=1',
      zkDisconnectsPerSec:
        'http://localhost:3000/d-solo/142Xi34mk/kafka-broker-zookeeper-connection?orgId=1&refresh=5s&from=now-1h&to=now&panelId=2',
      zkReadOnlyConnectsPerSec:
        'http://localhost:3000/d-solo/142Xi34mk/kafka-broker-zookeeper-connection?orgId=1&refresh=5s&from=now-1h&to=now&panelId=4',
      zkExpiresPerSec:
        'http://localhost:3000/d-solo/142Xi34mk/kafka-broker-zookeeper-connection?orgId=1&refresh=5s&from=now-1h&to=now&panelId=3',
      zkSASLAuthenticationPerSec:
        'http://localhost:3000/d-solo/142Xi34mk/kafka-broker-zookeeper-connection?orgId=1&refresh=5s&from=now-1h&to=now&panelId=6',
      zkAuthFailuresPerSec:
        'http://localhost:3000/d-solo/142Xi34mk/kafka-broker-zookeeper-connection?orgId=1&refresh=5s&from=now-1h&to=now&panelId=5',
    },
  },
  cluster_healthcheck: {
    core_healthcheck: {
      activeController:
        'http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=now-1h&to=now&panelId=31',
      offlinePartitionsCount:
        'http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=now-1h&to=now&panelId=32',
      underReplicatedPartitions:
        'http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=now-1h&to=now&panelId=33',
      partitionsUnderMinISR:
        'http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=now-1h&to=now&panelId=36',
      preferredReplicaImbalance:
        'http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=now-1h&to=now&panelId=34',
      brokersRunningGreaterThanOrEqualToThree:
        'http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=now-1h&to=now&panelId=44',
      produceRequestsPerSec:
        'http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=now-1h&to=now&panelId=39',
      fetchConsumerRequestsPerSec:
        'http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=now-1h&to=now&panelId=40',
      metadataRequestsPerSec:
        'http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=now-1h&to=now&panelId=41',
      offsetCommitRequestsPerSec:
        'http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=now-1h&to=now&panelId=42',
    },
    isr_count_change: {
      inSyncReplicaExpandsRate:
        'http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=now-1h&to=now&panelId=11',
      inSyncReplicaShrinkRate:
        'http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=now-1h&to=now&panelId=10',
    },
    throughput_io: {
      messagesInPerTopics:
        'http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=now-1h&to=now&panelId=19',
      messagesInPerSec:
        'http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=now-1h&to=now&panelId=37',
      bytesInPerSec:
        'http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=now-1h&to=now&panelId=24',
      bytesOutPerSec:
        'http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=now-1h&to=now&panelId=25',
    },
    leaders_partitions: {
      leaderElectionRate:
        'http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=now-1h&to=now&panelId=8',
      uncleanLeaderElectionRate:
        'http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=now-1h&to=now&panelId=9',
      leaderCountPerBroker:
        'http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=now-1h&to=now&panelId=14',
      numberOfPartitionsPerBroker:
        'http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=now-1h&to=now&panelId=15',
    },
  },
  cluster_replication: {
    replica_fetcher: {
      replicationBytesInPerSec:
        'http://localhost:3000/d-solo/E9bXmq4ik/kafka-cluster-replication?orgId=1&refresh=5s&from=now-1h&to=now&panelId=1',
      replicationBytesOutPerSec:
        'http://localhost:3000/d-solo/E9bXmq4ik/kafka-cluster-replication?orgId=1&refresh=5s&from=now-1h&to=now&panelId=2',
    },
    replication_io: {
      fethBytesPerSecPerReplicationThread:
        'http://localhost:3000/d-solo/E9bXmq4ik/kafka-cluster-replication?orgId=1&refresh=5s&from=now-1h&to=now&panelId=3',
      fetchRequestsPerSecReplicationThread:
        'http://localhost:3000/d-solo/E9bXmq4ik/kafka-cluster-replication?orgId=1&refresh=5s&from=now-1h&to=now&panelId=4',
    },
    replication_lag: {
      replicationMaxLagPerBroker:
        'http://localhost:3000/d-solo/E9bXmq4ik/kafka-cluster-replication?orgId=1&refresh=5s&from=now-1h&to=now&panelId=6',
    },
  },
  topics_logs: {
    log_info: {
      totalLogSize:
        'http://localhost:3000/d-solo/1vR8sjAmk/kafka-topics-logs?orgId=1&refresh=5s&from=now-1h&to=now&panelId=2',
      totalNumberOfReplicas:
        'http://localhost:3000/d-solo/1vR8sjAmk/kafka-topics-logs?orgId=1&refresh=5s&from=now-1h&to=now&panelId=11',
      numberOfPartitionsUnderMinISR:
        'http://localhost:3000/d-solo/1vR8sjAmk/kafka-topics-logs?orgId=1&refresh=5s&from=now-1h&to=now&panelId=12',
      underReplicatedPartitions:
        'http://localhost:3000/d-solo/1vR8sjAmk/kafka-topics-logs?orgId=1&refresh=5s&from=now-1h&to=now&panelId=13',
      numberOfSegmentFilesPerBroker:
        'http://localhost:3000/d-solo/1vR8sjAmk/kafka-topics-logs?orgId=1&refresh=5s&from=now-1h&to=now&panelId=6',
      messagesInPerSec:
        'http://localhost:3000/d-solo/1vR8sjAmk/kafka-topics-logs?orgId=1&refresh=5s&from=now-1h&to=now&panelId=8',
      bytesInPerSecOnMin:
        'http://localhost:3000/d-solo/1vR8sjAmk/kafka-topics-logs?orgId=1&refresh=5s&from=now-1h&to=now&panelId=10',
      bytesOutPerSec:
        'http://localhost:3000/d-solo/1vR8sjAmk/kafka-topics-logs?orgId=1&refresh=5s&from=now-1h&to=now&panelId=9',
    },
  },
};
