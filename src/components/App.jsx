import React, { Component } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ipcRenderer } from 'electron';

import BrokerHardDiskUsage from './BrokerHardDiskUsage';
import BrokerJvmAndOs from './BrokerJvmAndOs';
import BrokerPerformance from './BrokerPerformance';
import BrokerZookeeper from './BrokerZookeeper';
import ClusterHealthCheck from './ClusterHealthCheck';
import ClusterReplication from './ClusterReplication';
import TopicLogs from './TopicsLogs';
import HelpTab from './HelpTab';
import Home from './Home';
import Sidebar from './Sidebar';

import links from '../models/metricUrls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      links,
    };
  }

  componentDidMount() {
    ipcRenderer.send('app:rendered');
    ipcRenderer.on('preferences:send', (event, preferences) => {
      this.setState((prevState) => {
        return {
          ...prevState,
          preferences,
        };
      });
    });
  }

  render() {
    let broker_hard_disk_usage,
      broker_jvm_os,
      broker_performance,
      broker_zookeeper,
      cluster_healthcheck,
      cluster_replication,
      topics_logs;
    if (this.state.preferences) {
      ({
        broker_hard_disk_usage,
        broker_jvm_os,
        broker_performance,
        broker_zookeeper,
        cluster_healthcheck,
        cluster_replication,
        topics_logs,
      } = this.state.preferences.metrics);
    }

    return (
      <HashRouter>
        {this.state.preferences && (
          <>
            <Sidebar elements={this.state.preferences.metrics} />
            <main
              style={{
                marginLeft: '250px',
                marginTop: '15px',
                marginRight: '30px',
              }}
            >
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                  exact
                  path="/brokerHardDiskUsage"
                  element={
                    <BrokerHardDiskUsage
                      metrics={broker_hard_disk_usage}
                      metricURLs={links.broker_hard_disk_usage}
                    />
                  }
                />
                <Route
                  exact
                  path="/brokerJvmOs"
                  element={
                    <BrokerJvmAndOs
                      metrics={broker_jvm_os}
                      metricURLs={links.broker_jvm_os}
                    />
                  }
                />
                <Route
                  exact
                  path="/brokerPerformance"
                  element={
                    <BrokerPerformance
                      metrics={broker_performance}
                      metricURLs={links.broker_performance}
                    />
                  }
                />
                <Route
                  exact
                  path="/brokerZookeeper"
                  element={
                    <BrokerZookeeper
                      metrics={broker_zookeeper}
                      metricURLs={links.broker_zookeeper}
                    />
                  }
                />
                <Route
                  exact
                  path="/clusterHealthcheck"
                  element={
                    <ClusterHealthCheck
                      metrics={cluster_healthcheck}
                      metricURLs={links.cluster_healthcheck}
                    />
                  }
                />
                <Route
                  exact
                  path="/clusterReplication"
                  element={
                    <ClusterReplication
                      metrics={cluster_replication}
                      metricURLs={links.cluster_replication}
                    />
                  }
                />
                <Route
                  exact
                  path="/topicsLogs"
                  element={<TopicLogs metrics={topics_logs} metricURLs={links.topics_logs}/>}
                />
                <Route exact path="/HelpTab" element={<HelpTab />} />
              </Routes>
            </main>
          </>
        )}
      </HashRouter>
    );
  }
}

export default App;
