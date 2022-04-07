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
          src="http://localhost:3000/d/e-6AJQOik/kafka-cluster-global-healthcheck?orgId=1&refresh=5s"
        />
      </Card>
    </Container>
  );
}

export default GrafChart;
