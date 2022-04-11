import React, { Component } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';

const Brokers = React.lazy(() => import('./Brokers'));
const Consumers = React.lazy(() => import('./Consumers'));
const Producers = React.lazy(() => import('./Producers'));
const Topics = React.lazy(() => import('./Topics'));
const HelpTab = React.lazy(() => import('./HelpTab'));

import Cluster from './Cluster';
import Overview from './Overview';
import Performance from './Performance';
import Settings from './Settings';
import Sidebar from './Sidebar';
import { ipcRenderer } from 'electron';

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
    console.log(this.state);
  }

  render() {
    return (
      <HashRouter>
        <Sidebar />
        <main style={{ marginLeft: '250px' }}>
          <Routes>
            <Route exact path="/" element={<Overview />} />
            <Route exact path="/cluster" element={<Cluster />} />
            <Route
              exact
              path="/brokers"
              element={
                <React.Suspense fallback={<>...</>}>
                  <Brokers />
                </React.Suspense>
              }
            />
            <Route
              exact
              path="/consumers"
              element={
                <React.Suspense fallback={<>...</>}>
                  <Consumers />
                </React.Suspense>
              }
            />
            <Route
              exact
              path="/producers"
              element={
                <React.Suspense fallback={<>...</>}>
                  <Producers />
                </React.Suspense>
              }
            />
            <Route
              exact
              path="/topics"
              element={
                <React.Suspense fallback={<>...</>}>
                  <Topics />
                </React.Suspense>
              }
            />
            <Route
              exact
              path="/HelpTab"
              element={
                <React.Suspense fallback={<>...</>}>
                  <HelpTab />
                </React.Suspense>
              }
            />
            <Route exact path="/performance" element={<Performance />} />
            <Route exact path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </HashRouter>
    );
  }
}

export default App;
