import React, { Component } from 'react';
import { Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ipcRenderer } from 'electron';

const Emphasis = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  display: 'inline',
}));
const GreyCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  margin: '20px 0px',
}));

class Dashboard extends Component {
  constructor() {
    super();
  }

  launchGithub() {
    ipcRenderer.send('github:launch');
  }

  render() {
    return (
      <div>
        <h1>Welcome to Kaffia!</h1>
        <GreyCard variant="outlined" sx={{ p: '10px' }}>
          <Typography>
            <Emphasis>Kaffia</Emphasis> is an open-source, intuitive GUI for
            Kafka clusters that allows you to tailor Kafka cluster monitoring to
            your needs and experience level. We designed Kaffia to make
            launching your cluster as <Emphasis>easy</Emphasis> and{' '}
            <Emphasis>intuitive</Emphasis> as possible.
          </Typography>
        </GreyCard>
        <GreyCard variant="outlined" sx={{ p: '10px' }}>
          <Typography>
            Now that you've launched your metrics, getting started with Kaffia
            is a breeze! Just choose a category in the sidebar to start
            monitoring the <Emphasis>custom metrics</Emphasis> you've chosen to
            track.
          </Typography>
        </GreyCard>
        <GreyCard variant="outlined" sx={{ p: '10px' }}>
          <Typography>
            When you're done with your Kafka cluster, just hit the{' '}
            <Emphasis>STOP CLUSTER</Emphasis> button on the right and let Kaffia
            handle the rest. If you're ready to quit Kaffia but still want to
            keep your cluster up and running, <Emphasis>don't worry.</Emphasis>{' '}
            Your cluster and all of its metrics will still be running in{' '}
            <Emphasis>Docker Desktop</Emphasis> after you exit Kaffia.
          </Typography>
        </GreyCard>
        <GreyCard variant="outlined" sx={{ p: '10px' }}>
          <Typography>
            Do you want to{' '}
            <Emphasis>contribute to the Kaffia community?</Emphasis> Head over
            to{' '}
            <Emphasis
              onClick={this.launchGithub}
              sx={{
                textDecoration: 'underline',
                cursor: 'pointer',
                ':hover': { color: '#64b5f6' },
              }}
            >
              our GitHub page
            </Emphasis>{' '}
            to get started.
          </Typography>
        </GreyCard>
      </div>
    );
  }
}

export default Dashboard;
