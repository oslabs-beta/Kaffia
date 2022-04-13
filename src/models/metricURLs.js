const metricURLs = {
    broker_hard_disk_usage: {
        global_topics_size: {
            'globalTopicsSizeIncludingReplicas': "http://localhost:3000/d-solo/zApgMBbik/kafka-hard-disk-usage?orgId=1&refresh=5s&from=1649821194324&to=1649824794325&panelId=2",
            'globalTopicsSizeWithoutReplicas': "http://localhost:3000/d-solo/zApgMBbik/kafka-hard-disk-usage?orgId=1&refresh=5s&from=1649821206362&to=1649824806363&panelId=5",
        },
        log_size_per_broker: {
            'logSizePerBrokerIncludingReplicas': "http://localhost:3000/d-solo/zApgMBbik/kafka-hard-disk-usage?orgId=1&refresh=5s&from=1649821259450&to=1649824859451&panelId=3"
        }
    },
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
    broker_performance: {
        request_total_time: {
            'requestTotalTime': "http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?orgId=1&refresh=5s&from=1649819897487&to=1649823497487&panelId=1"
        },
        queue_size: {
            'responseQueueSize': "http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?orgId=1&refresh=5s&from=1649819981930&to=1649823581930&panelId=10",
            'requestQueueSize': "http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?from=1649820175905&to=1649823775905&orgId=1&panelId=9"
        },
        idle_percent: {
            'networkSocketAvgIdlePercent': "http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?orgId=1&refresh=5s&from=1649820453372&to=1649824053372&panelId=16",
            'requestHandlerAvgIdlePercent': "http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?from=1649820590640&to=1649824190641&orgId=1&panelId=15"
        },
        queue_time: {
            'requestQueueTime': "http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?orgId=1&refresh=5s&from=1649820714100&to=1649824314101&panelId=2",
            'responseQueueTime': "http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?orgId=1&refresh=5s&from=1649820714100&to=1649824314101&panelId=2"
        },
        request_rate: {
            'requestPerSec': "http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?orgId=1&refresh=5s&from=1649820867080&to=1649824467080&panelId=12"
        },
        time_placeholder: {
            'throttleTime': "http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?orgId=1&refresh=5s&from=1649820952387&to=1649824552387&panelId=5",
            'localTime': "http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?orgId=1&refresh=5s&from=1649820968312&to=1649824568312&panelId=3",
            'responseSendTime': "http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?orgId=1&refresh=5s&from=1649820985355&to=1649824585355&panelId=7",
            'remoteTime': "http://localhost:3000/d-solo/aRNaJwOmk/kafka-broker-performance-and-latency?orgId=1&refresh=5s&from=1649821008756&to=1649824608756&panelId=4",
        }
    },
    broker_zookeeper: {
        zookeeper_metrics: {
            'zkSyncConnectsPerSec': "http://localhost:3000/d-solo/142Xi34mk/kafka-broker-zookeeper-connection?orgId=1&refresh=5s&from=1649823279572&to=1649825079572&panelId=1",
            'zkDisconnectsPerSec': "http://localhost:3000/d-solo/142Xi34mk/kafka-broker-zookeeper-connection?orgId=1&refresh=5s&from=1649823302243&to=1649825102243&panelId=2",
            'zkReadOnlyConnectsPerSec': "http://localhost:3000/d-solo/142Xi34mk/kafka-broker-zookeeper-connection?orgId=1&refresh=5s&from=1649823323111&to=1649825123111&panelId=4",
            'zkExpiresPerSec': "http://localhost:3000/d-solo/142Xi34mk/kafka-broker-zookeeper-connection?orgId=1&refresh=5s&from=1649823334425&to=1649825134425&panelId=3",
            'zkSASLAuthenticationPerSec': "http://localhost:3000/d-solo/142Xi34mk/kafka-broker-zookeeper-connection?orgId=1&refresh=5s&from=1649823347950&to=1649825147951&panelId=6",
            'zkAuthFailuresPerSec': "http://localhost:3000/d-solo/142Xi34mk/kafka-broker-zookeeper-connection?orgId=1&refresh=5s&from=1649823362683&to=1649825162683&panelId=5",
        }
    },
    cluster_healthcheck: {
        core_healthcheck: {
            'activeController': "http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1649822105584&to=1649825705584&panelId=31",
            'offlinePartitionsCount': "http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1649822131535&to=1649825731536&panelId=32",
            'underReplicatedPartitions': "http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1649822153900&to=1649825753900&panelId=33",
            'partitionsUnderMinISR': "http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1649822168820&to=1649825768820&panelId=36",
            'preferredReplicaImbalance': "http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1649822185053&to=1649825785053&panelId=34",
            'brokersRunningGreaterThanOrEqualToThree': "http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1649822205397&to=1649825805397&panelId=44",
            'produceRequestsPerSec': "http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1649822219577&to=1649825819577&panelId=39",
            'fetchConsumerRequestsPerSec': "http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1649822233648&to=1649825833648&panelId=40",
            'metadataRequestsPerSec': "http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1649822245995&to=1649825845995&panelId=41",
            'offsetCommitRequestsPerSec': "http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1649822267986&to=1649825867986&panelId=42",
        },
        isr_count_change: {
            'inSyncReplicaExpandsRate': "http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1649822440407&to=1649826040407&panelId=11",
            'inSyncReplicaShrinkRate': "http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1649822453040&to=1649826053040&panelId=10",
        },
        throughput_io: {
            'messagesInPerTopics': "http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1649822582409&to=1649826182409&panelId=19", 
            'messagesInPerSec': "http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1649822596565&to=1649826196565&panelId=37",
            'bytesInPerSec': "http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1649822610452&to=1649826210452&panelId=24",
            'bytesOutPerSec': "http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1649822623041&to=1649826223041&panelId=25",
        },
        leaders_partitions: {
            'leaderElectionRate': "http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1649822940488&to=1649826540488&panelId=8",
            'uncleanLeaderElectionRate': "http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1649822957612&to=1649826557612&panelId=9",
            'leaderCountPerBroker': "http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1649822974925&to=1649826574925&panelId=14",
            'numberOfPartitionsPerBroker': "http://localhost:3000/d-solo/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s&from=1649822994191&to=1649826594191&panelId=15",
        },
    },
    cluster_replication: {
        replica_fetcher: {
            'replicationBytesInPerSec': "http://localhost:3000/d-solo/E9bXmq4ik/kafka-cluster-replication?orgId=1&refresh=5s&from=1649823107861&to=1649826707861&panelId=1",
            'replicationBytesOutPerSec': "http://localhost:3000/d-solo/E9bXmq4ik/kafka-cluster-replication?orgId=1&refresh=5s&from=1649823538354&to=1649827138354&panelId=2" ,
        },
        replication_io: {
            'fethBytesPerSecPerReplicationThread': "http://localhost:3000/d-solo/E9bXmq4ik/kafka-cluster-replication?orgId=1&refresh=5s&from=1649823682483&to=1649827282483&panelId=3",
            'fetchRequestsPerSecReplicationThread': "http://localhost:3000/d-solo/E9bXmq4ik/kafka-cluster-replication?orgId=1&refresh=5s&from=1649823764398&to=1649827364398&panelId=4",
        },
        replication_lag: {
            'replicationMaxLagPerBroker': "http://localhost:3000/d-solo/E9bXmq4ik/kafka-cluster-replication?orgId=1&refresh=5s&from=1649823892257&to=1649827492257&panelId=6",
        },
    },
    topics_logs: {
        log_info: {
            'totalLogSize': "http://localhost:3000/d-solo/1vR8sjAmk/kafka-topics-logs?orgId=1&refresh=5s&from=1649823982416&to=1649827582416&panelId=2",
            'totalNumberOfReplicas': "http://localhost:3000/d-solo/1vR8sjAmk/kafka-topics-logs?orgId=1&refresh=5s&from=1649824002213&to=1649827602213&panelId=11",
            'numberOfPartitionsUnderMinISR': "http://localhost:3000/d-solo/1vR8sjAmk/kafka-topics-logs?orgId=1&refresh=5s&from=1649824084726&to=1649827684726&panelId=12",
            'underReplicatedPartitions': "http://localhost:3000/d-solo/1vR8sjAmk/kafka-topics-logs?orgId=1&refresh=5s&from=1649824159046&to=1649827759046&panelId=13",
            'numberOfSegmentFilesPerBroker': "http://localhost:3000/d-solo/1vR8sjAmk/kafka-topics-logs?orgId=1&refresh=5s&from=1649824219795&to=1649827819795&panelId=6",
            'messagesInPerSec': "http://localhost:3000/d-solo/1vR8sjAmk/kafka-topics-logs?orgId=1&refresh=5s&from=1649824236823&to=1649827836823&panelId=8",
            'bytesInPerSecOnMin': "http://localhost:3000/d-solo/1vR8sjAmk/kafka-topics-logs?orgId=1&refresh=5s&from=1649824265971&to=1649827865971&panelId=10",
            'bytesOutPerSec': "http://localhost:3000/d-solo/1vR8sjAmk/kafka-topics-logs?orgId=1&refresh=5s&from=1649824296562&to=1649827896562&panelId=9"
        },
    }
  }

export default metricURLs;