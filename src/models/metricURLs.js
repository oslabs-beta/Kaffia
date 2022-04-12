const metricURLs = {
    broker_hard_disk_usage: [
        "global_topics_size",
        "log_size_per_broker"
    ],
    broker_jvm_os: {
        open_file_descriptors: {
            'openFileDescriptors': "http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=1649375825927&to=1649379425927&panelId=2"
        },
        memory_usage: {
            'jvmMemUsedNonheap': "http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=1649375653777&to=1649379253777&panelId=6",
            'jvmMemUsedHeap': "http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=1649375653777&to=1649379253777&panelId=6",
        },
        garbage_collection: {
            'garbageCollectionProcessTime': "http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=1649689987800&to=1649693587800&panelId=10"
        },
        available_memory: {
            'freePhysicalMemory': "http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=1649375870200&to=1649379470200&panelId=13",
            'availableVirtualMemory': "http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=1649375939533&to=1649379539533&panelId=14"
        },
        cpu_usage: {
            'cpu': "http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=1649375705161&to=1649379305161&panelId=4",
            'processCpu': "http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=1649375760002&to=1649379360003&panelId=11"
        },
    },
    broker_performance: [
        "request_total_time",
        "queue_size",
        "idle_percent",
        "queue_time",
        "request_rate",
        "time_placeholder"
    ],
    broker_zookeeper: [
        "zookeeper_metrics"
    ],
    cluster_healthcheck: [
        "core_healthcheck",
        "isr_count_change",
        "throughput_io",
        "leaders_partitions"
    ],
    cluster_replication: [
        "replica_fetcher",
        "replication_io",
        "replication_lag"
    ],
    topics_logs: [
        "log_info"
    ]
  }

export default metricURLs;