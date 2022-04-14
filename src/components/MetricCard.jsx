import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

function MetricCard(props) {
  const { metricURL } = props;
  return (
    <>
      <Card
        key={`SRC${metricURL}`}
        elevation={20}
        sx={{ p: 0, height: '100%' }}
      >
        <CardActionArea sx={{ height: '100%' }}>
          <CardContent>
            <CardMedia
              component="iframe"
              src={metricURL}
              width="100%"
              height="100%"
              frameBorder="0"
              sx={{ p: 0, height: '85%' }}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default MetricCard;
