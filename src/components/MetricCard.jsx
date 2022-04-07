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
    const { CatName, CatImage, CatPersonality, CatDescription} = props.metric;

    return (
        <>
            <Card key={`CatName${CatName}`} elevation={20} >
                <CardActionArea>
                <CardContent>
                    <Grid container spacing={6} rowSpacing={0.1} >
                        {/* <Grid item xs={12} >
                            <h3><strong>Neko</strong></h3>
                        </Grid> */}
                        <Grid item xs={12}>
                            <h1>{CatName}</h1>
                        </Grid>
                        <Grid item xs={12} justifyContent="space-between">
                            <img src={CatImage} alt={CatName} />
                        </Grid>
                        <Grid item xs={6}>
                            <h3>{CatPersonality}</h3>
                        </Grid>
                        <Grid item xs={6}>
                            <h3>{CatDescription}</h3>
                        </Grid>
                    </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
  );
}