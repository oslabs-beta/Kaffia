import React from 'react';
import Grid from '@mui/material/Grid';
import MetricCard from '../MetricCard';

/**
 * 
 * @param {Object} metricCategory - object containing metric subcategories from
 *                                 the userPreferences object 
 * @returns {JSX} - grafana panel for each metric embedded in each card
 */
function displayMetrics(metricCategory) {
  const metricURLArray = Object.values(metricCategory);

  return metricURLArray.map((metricURL, index) => (
    <Grid item xs={6} sx={{ height: '250px', mb: 3 }} key={index}>
      <MetricCard metricURL={metricURL} key={`${metricCategory}${metricURL}`} />
    </Grid>
  ));
}

export default displayMetrics;

