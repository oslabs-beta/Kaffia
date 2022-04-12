import React, { Component } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import {ipcRenderer} from 'electron';

import BrokerHardDiskUsage from './BrokerHardDiskUsage';
import BrokerJVMAndOS from './BrokerJVMOS';
import Consumers from './Consumers';
import Producers from './Producers';
import Topics from './Topics';
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
    console.log("this.state.metrics: ", this.state.metrics);
    // console.log("metricProps: ", metricProps);
  }
  

  render() {
    let broker_hard_disk_usage, broker_jvm_os, broker_performance, broker_zookeeper, cluster_healthcheck, cluster_replication, topics_logs;
    if(this.state.metrics) {
      ({broker_hard_disk_usage, broker_jvm_os, broker_performance, broker_zookeeper, cluster_healthcheck, cluster_replication, topics_logs} = this.state.metrics);
    }

    return (
      <HashRouter>
        <Sidebar />
        <main style={{ marginLeft: '250px' }}>
          {this.state.metrics &&
          <Routes>
            <Route exact path="/" element={<Overview />} />
            <Route exact path="/cluster" element={<Cluster />} />
            <Route
              exact
              path="/brokerHardDiskUsage"
              // element={<BrokerHardDiskUsage metrics={broker_hard_disk_usage} />}
            />
            <Route
              exact
              path="/brokerJVMOS"
              element={<BrokerJVMAndOS metrics={broker_jvm_os} />}
            />
            <Route
              exact
              path="/brokerPerformance"
              element={<Producers />}
            />
            <Route
              exact
              path="/brokerZookeeper"
              element={<Topics />}
            />
            <Route
              exact
              path="/clusterHealthcheck"
              element={<Topics />}
            />
            <Route
              exact
              path="/clusterReplication"
              element={<Topics />}
            />
            <Route
              exact
              path="/topicsLogs"
              element={<Topics />}
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
