import { Card, Container } from '@mui/material';
import React from 'react';

function GrafChart() {
  return (
    <Container
      maxWidth="false"
      title="monitor-container"
      sx={{ marginTop: '1em' }}
    >
      <Card>
        <iframe
          title="grafana-dashboard"
          width="100%"
          height="1080px"
        //   src="http://localhost:3000"
          src="https://rcervant.grafana.net/d/0zgKxhynk/kafka-overview?orgId=1&from=1648589106131&to=1648590906132"
        />
      </Card>
    </Container>
  );
}

export default GrafChart;