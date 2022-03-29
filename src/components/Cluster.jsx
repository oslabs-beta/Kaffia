import React, { Component } from 'react';
import Brokers from './Brokers';
import Consumers from './Consumers';
import Producers from './Producers';
import Topics from './Topics';

class Cluster extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <React.Suspense fallback={<>...</>}>
          <Brokers />
        </React.Suspense>
        <React.Suspense fallback={<>...</>}>
          <Consumers />
        </React.Suspense>
        <React.Suspense fallback={<>...</>}>
          <Producers />
        </React.Suspense>
        <React.Suspense fallback={<>...</>}>
          <Topics />
        </React.Suspense>
      </>
    );
  }
}

export default Cluster;
