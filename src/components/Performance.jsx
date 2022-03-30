import React, { Component } from 'react';
import GrafChart from './GrafanaDash';

class Performance extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Performance</h1>
        <GrafChart />
      </div>
    );
  }
}

export default Performance;
