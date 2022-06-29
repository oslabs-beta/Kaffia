import React from 'react';
import Typography from '@mui/material/Typography';
import renderMetricPanels from './_utils/renderMetricPanels';

function ClusterHealthCheck(props) {
  const {metrics, metricURLs} = props;
  
  return (
    <>
      <Typography variant="h4">Cluster Health Check</Typography>
      {metrics && renderMetricPanels(metrics, metricURLs)}
    </>
  );
}

export default ClusterHealthCheck;
