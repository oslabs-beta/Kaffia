import React from 'react';
import renderMetricPanels from './_utils/renderMetricPanels';

function BrokerHardDiskUsage(props) {
  const { metrics, metricURLs } = props;
  console.log(props);
  console.log('hello');
  return (
    <>
      <h1>Broker Hard Disk Usage</h1>
      {metrics && renderMetricPanels(metrics, metricURLs)}
    </>
  );
}

export default BrokerHardDiskUsage;
