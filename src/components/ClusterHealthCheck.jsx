import React from 'react';
import renderMetricPanels from './_utils/renderMetricPanels';

function ClusterHealthCheck(props) {
  const { metrics, metricURLs } = props;
  return (
    <>
      <h1>Cluster Health Check</h1>
      {metrics && renderMetricPanels(metrics, metricURLs)}
    </>
  );
}

export default ClusterHealthCheck;
