import React, { Component } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Sidebar from './Sidebar';
import Brokers from './Brokers';
import Cluster from './Cluster';
import Dashboard from './Dashboard';
import Consumers from './Consumers';
import Performance from './Performance';
import Producers from './Producers';
import Topics from './Topics';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sidebarIndex: 0,
    };
  }

  handleSidebarClick(sidebarId) {
    this.setState({
      sidebarIndex: sidebarId,
    });
  }

  render() {
    return (
      <HashRouter>
        <Sidebar />
        <main style={{ marginLeft: '250px' }}>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/cluster" element={<Cluster />} />
            <Route exact path="/brokers" element={<Brokers />} />
            <Route exact path="/consumers" element={<Consumers />} />
            <Route exact path="/producers" element={<Producers />} />
            <Route exact path="/topics" element={<Topics />} />
            <Route exact path="/performance" element={<Performance />} />
          </Routes>
        </main>
      </HashRouter>
    );
  }
}

export default App;
