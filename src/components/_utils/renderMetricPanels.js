import React from 'react';
import Grid from '@mui/material/Grid';
import displayMetrics from './displayMetrics';

/**
 * 
 * @param {string[]} metrics - metrics to display from userPreferences object
 * @param {Object} metricPanel - object containing grafana embed URLs from
 *                                the models/metrics object 
 * @returns 
 */
function renderMetricPanels(metrics, metricPanel) {
  return (
    <Grid container columnSpacing={4}>
      {metrics.map((metric) => displayMetrics(metricPanel[metric]))}
    </Grid>
  );
}

export default renderMetricPanels;
