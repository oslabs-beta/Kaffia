import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid';

function MetricCard(props) {
    const {metricURL} = props;
    return (
        <>
            <Card key={`SRC${metricURL}`} elevation={20}  sx={{p:0}}>
                <CardActionArea>
                    <CardContent>
                        {/* <Grid container spacing={6} rowSpacing={0.1} >
                            <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="space-between"> */}
                                {/* <iframe src={metricURL} width="100%" height="100%" frameBorder="0" /> */}
                                <CardMedia component="iframe" src={metricURL} width="100%" height="100%" frameBorder="0" sx={{p:0}}/>
                            {/* </Grid>
                        </Grid> */}
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}


export default MetricCard;