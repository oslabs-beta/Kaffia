import React from 'react';
import Typography from '@mui/material/Typography';
import renderMetricPanels from './_utils/renderMetricPanels';

function BrokerZookeeper(props) {
  const {metrics, metricURLs} = props;
  
  return (
    <>
      <Typography variant="h4">Broker Zookeeper</Typography>
      {metrics && renderMetricPanels(metrics, metricURLs)}
    </>
  );
}

export default BrokerZookeeper;
