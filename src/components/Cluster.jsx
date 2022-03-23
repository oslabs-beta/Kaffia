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
        <Brokers />
        <Consumers />
        <Producers />
        <Topics />
      </>
    );
  }
}

export default Cluster;
