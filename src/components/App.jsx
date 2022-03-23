import React, { Component } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Brokers from './Brokers';
import Cluster from './Cluster';
import Dashboard from './Dashboard';
import Consumers from './Consumers';
import Performance from './Performance';
import Producers from './Producers';
import Settings from './Settings';
import Sidebar from './Sidebar';
import SplashPage from './SplashPage';
import Topics from './Topics';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showSidebar: true,
    };
  }

  toggleSidebar() {
    this.setState({
      showSidebar: true,
    });
  }

  render() {
    console.log(window.location.hash.split('#')[1]);
    return (
      <HashRouter>
        {this.state.showSidebar && <Sidebar />}
        <main style={{ marginLeft: '250px' }}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <SplashPage toggleSidebar={this.toggleSidebar.bind(this)} />
              }
            ></Route>
            <Route exact path="/overview" element={<Dashboard />} />
            <Route exact path="/cluster" element={<Cluster />} />
            <Route exact path="/brokers" element={<Brokers />} />
            <Route exact path="/consumers" element={<Consumers />} />
            <Route exact path="/producers" element={<Producers />} />
            <Route exact path="/topics" element={<Topics />} />
            <Route exact path="/performance" element={<Performance />} />
            <Route exact path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </HashRouter>
    );
  }
}

export default App;
