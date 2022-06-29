import Typography from '@mui/material/Typography';
import React from 'react';
import renderMetricPanels from './_utils/renderMetricPanels';

function BrokerJVMAndOS(props) {
  const {metrics, metricURLs} = props;
  
  return (
    <>
      <Typography variant="h4">Broker JVM and OS</Typography>
      {metrics && renderMetricPanels(metrics, metricURLs)}
    </>
  );
}

export default BrokerJVMAndOS;
