import React from 'react';
import Grid from '@mui/material/Grid';
import displayMetrics from './displayMetrics';

function renderMetricPanels(metrics, metricPanel) {
    return (
        <Grid container spacing={10} rowSpacing={5} columnSpacing={3} >
            {metrics.map((metric) => (displayMetrics(metricPanel[metric])))}
        </Grid >
    );
}


export default renderMetricPanels;