import React from 'react';
import Typography from '@mui/material/Typography';
import renderMetricPanels from './_utils/renderMetricPanels';

function ClusterReplication(props) {
  const {metrics, metricURLs} = props;
  
  return (
    <>
      <Typography variant="h4">Cluster Replication</Typography>
      {metrics && renderMetricPanels(metrics, metricURLs)}
    </>
  );
}

export default ClusterReplication;
