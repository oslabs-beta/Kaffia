import React from 'react';
import renderMetricPanels from './_utils/renderMetricPanels';

function ClusterReplication(props) {
  const { metrics, metricURLs } = props;
  return (
    <>
      <h1>Cluster Replication</h1>
      {metrics && renderMetricPanels(metrics, metricURLs)}
    </>
  );
}

export default ClusterReplication;
