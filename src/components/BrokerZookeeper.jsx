import React from 'react';
import renderMetricPanels from './_utils/renderMetricPanels';

function BrokerZookeeper(props) {
  const { metrics, metricURLs } = props;
  return (
    <>
      <h1>Broker Zookeeper</h1>
      {metrics && renderMetricPanels(metrics, metricURLs)}
    </>
  );
}

export default BrokerZookeeper;
