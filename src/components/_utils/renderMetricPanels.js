import React from 'react';
import Grid from '@mui/material/Grid';
import displayMetrics from './displayMetrics';

function renderMetricPanels(metrics, metricPanel) {
  return (
    <Grid container columnSpacing={4}>
      {metrics.map((metric) => displayMetrics(metricPanel[metric]))}
    </Grid>
  );
}

export default renderMetricPanels;
