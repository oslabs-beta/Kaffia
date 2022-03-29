import React, { Component } from 'react';

class Brokers extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    fetch('http://localhost:9090/api/v1/query?query=kafka_server_brokerstate')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div>
        <h1>Brokers</h1>
      </div>
    );
  }
}

export default Brokers;
