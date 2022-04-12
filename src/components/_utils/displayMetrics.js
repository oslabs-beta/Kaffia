import React from 'react';
import Grid from '@mui/material/Grid';
import MetricCard from '../MetricCard';    

function displayMetrics(metricCategory) {
    const metricURLArray = Object.values(metricCategory);
    
    return metricURLArray.map((metricURL, index) => {
        return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <MetricCard metricURL={metricURL} key={`${metricCategory}${metricURL}`} />
            </Grid>
        );
    });
}


export default displayMetrics;