import React from 'react';
import renderMetricPanels from './_utils/renderMetricPanels';

function BrokerJVMAndOS(props) {
  const { metrics, metricURLs } = props;
  return (
    <>
      <h1>Broker JVM and OS Metrics</h1>
      {metrics && renderMetricPanels(metrics, metricURLs)}
    </>
  );
}

export default BrokerJVMAndOS;
