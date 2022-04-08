import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';



export default function MetricCard(props) {
    const { metric } = props.metric;

    return (
        <>
            <Card key={`SRC${metric}`} elevation={20} >
                <CardActionArea>
                <CardContent>
                    <Grid container spacing={6} rowSpacing={0.1} >                      
                        <Grid item xs={12} justifyContent="space-between">
                            <iframe src={metric} alt={metric}></iframe>
                        </Grid>
                    </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
  );
}