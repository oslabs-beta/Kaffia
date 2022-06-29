import React from 'react';
import Typography from '@mui/material/Typography';
import renderMetricPanels from './_utils/renderMetricPanels';

function BrokerPerformance(props) {
  const {metrics, metricURLs} = props;
  
  return (
    <>
      <Typography variant="h4">Broker Performance</Typography>
      {metrics && renderMetricPanels(metrics, metricURLs)}
    </>
  );
}

export default BrokerPerformance;
