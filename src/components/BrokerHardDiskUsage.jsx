import React from 'react';
import Typography from '@mui/material/Typography';
import renderMetricPanels from './_utils/renderMetricPanels';

function BrokerHardDiskUsage(props) {
  const { metrics, metricURLs } = props;
  
  return (
    <>
      <Typography variant="h4">Broker Hard Disk Usage</Typography>
      {metrics && renderMetricPanels(metrics, metricURLs)}
    </>
  );
}

export default BrokerHardDiskUsage;
