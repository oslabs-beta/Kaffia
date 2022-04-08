import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MetricCard from './MetricCard';
import Grid from '@mui/material/Grid';

function Brokers() {
  const panels = {
    'jvmMemUsedNonheap': "http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=1649375552985&to=1649379152985&panelId=8",
    'jvmMemUsedHeap': "http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=1649375653777&to=1649379253777&panelId=6",
    'cpu': "http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=1649375705161&to=1649379305161&panelId=4",
    'processCpu': "http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=1649375760002&to=1649379360003&panelId=11",
    'openFileDescriptors': "http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=1649375825927&to=1649379425927&panelId=2",
    'freePhysicalMemory': "http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=1649375870200&to=1649379470200&panelId=13",
    'availableVirtualMemory': "http://localhost:3000/d-solo/AdG9A1xmk/kafka-brokers-jvm-and-os?orgId=1&refresh=5s&from=1649375939533&to=1649379539533&panelId=14" 
  }

  return (
    <>
      <h1>Brokers</h1>
      {/* <Grid container spacing={10} rowSpacing={9} columnSpacing={3}>
        <Grid item xs={6}>
          <Card elevation={20}>
            <CardContent>
              <iframe src={panels['jvmMemUsedHeap']} width="100%" height="100%" frameborder="0" loading="lazy"></iframe>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card elevation={20}>
            <CardContent>
              <iframe src={panels['jvmMemUsedHeap']} width="100%" height="100%" frameborder="0" loading="lazy"></iframe>
            </CardContent>
          </Card>
        </Grid> */}

        {Object.keys(panels).map((metric, i) => (
          <Grid item xs={6} key={i}>
            <MetricCard metric={metric} />
          </Grid>
            ))}
        {/* </Grid> */}
    </>
  );

}

export default Brokers;