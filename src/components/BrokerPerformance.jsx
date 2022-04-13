import React from 'react';
import renderMetricPanels from './_utils/renderMetricPanels';

function BrokerPerformance(props) {
  const { metrics, metricURLs } = props;
  return (
    <>
      <h1>Broker Performance</h1>
      {metrics && renderMetricPanels(metrics, metricURLs)}
    </>
  );
}

export default BrokerPerformance;
