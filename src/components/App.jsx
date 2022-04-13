import React, { Component } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import {ipcRenderer} from 'electron';

import BrokerHardDiskUsage from './BrokerHardDiskUsage';
import BrokerJVMAndOS from './BrokerJVMOS';
import BrokerPerformance from './BrokerPerformance';
import BrokerZookeeper from './BrokerZookeeper';
import ClusterHealthCheck from './ClusterHealthCheck';
import ClusterReplication from './ClusterReplication';
import TopicLogs from './TopicsLogs';
import HelpTab from './HelpTab';
import Cluster from './Cluster';
import Overview from './Overview';
import Performance from './Performance';
import Settings from './Settings';
import Sidebar from './Sidebar';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    ipcRenderer.send('app:rendered');
    ipcRenderer.on('preferences:send', (event, preferences) => {
      this.setState(preferences);
    });
  }

  componentDidUpdate() {
    ipcRenderer.send('app:rendered');
  }

  render() {
    let broker_hard_disk_usage, broker_jvm_os, broker_performance, broker_zookeeper, cluster_healthcheck, cluster_replication, topics_logs;
    if(this.state.metrics) {
      ({
        broker_hard_disk_usage,
        broker_jvm_os, broker_performance,
        broker_zookeeper,
        cluster_healthcheck,
        cluster_replication,
        topics_logs
      } = this.state.metrics);
    }

    return (
      <HashRouter>
        <Sidebar />
        <main
          style={{
            marginLeft: '250px',
            marginTop: '15px',
            marginRight: '30px',
          }}
          >
          {this.state.metrics &&
          <Routes>
            <Route exact path="/" element={<Overview />} />
            <Route exact path="/cluster" element={<Cluster />} />
            <Route
              exact
              path="/brokerHardDiskUsage"
              element={<BrokerHardDiskUsage metrics={broker_hard_disk_usage} />}
            />
            <Route
              exact
              path="/brokerJVMOS"
              element={<BrokerJVMAndOS metrics={broker_jvm_os} />}
            />
            <Route
              exact
              path="/brokerPerformance"
              element={<BrokerPerformance metrics={broker_performance} />}
            />
            <Route
              exact
              path="/brokerZookeeper"
              element={<BrokerZookeeper metrics={broker_zookeeper} />} 
            />
            <Route
              exact
              path="/clusterHealthcheck"
              element={<ClusterHealthCheck metrics={cluster_healthcheck} />}
            />
            <Route
              exact
              path="/clusterReplication"
              element={<ClusterReplication metrics={cluster_replication} />}
            />
            <Route
              exact
              path="/topicsLogs"
              element={<TopicLogs metrics={topics_logs} />}
            />
            <Route
              exact
              path="/HelpTab"
              element={<HelpTab />}
            />
            <Route exact path="/performance" element={<Performance />} />
            <Route exact path="/settings" element={<Settings />} />
          </Routes>
          }      
        </main>
      </HashRouter>
    );
  }
}

export default App;
