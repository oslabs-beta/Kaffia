import React, { useState, useEffect } from 'react';
import {
  Button,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Checkbox,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { ipcRenderer } from 'electron';

export default function Launch() {
  const [brokers, setBrokers] = useState(1);
  const [metrics, setMetrics] = useState({
    broker_hard_disk_usage: [],
    broker_jvm_os: [],
    broker_performance: [],
    broker_zookeeper: [],
    cluster_healthcheck: [],
    cluster_replication: [],
    topics_logs: [],
  });

  useEffect(() => {
    console.log(metrics);
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    for (const dashboard in metrics) {
      if (!metrics[dashboard].length) delete metrics[dashboard];
    }
    ipcRenderer.send('preferences:submit', { brokers, metrics });
  };

  const handleBrokersChange = (event) => {
    setBrokers(event.target.value);
  };

  const handleMetricsChange = (event) => {
    const dashboard = event.target.parentElement.parentElement.parentElement.id;
    if (event.target.checked) {
      const dashboardMetrics = [...metrics[dashboard]];
      dashboardMetrics.push(event.target.name);
      setMetrics({
        ...metrics,
        [dashboard]: dashboardMetrics,
      });
    } else {
      const dashboardMetrics = new Set([...metrics[dashboard]]);
      dashboardMetrics.delete(event.target.name);
      setMetrics({
        ...metrics,
        [dashboard]: Array.from(dashboardMetrics),
      });
    }
  };

  return (
    <center>
      <form onSubmit={handleSubmit}>
        <InputLabel id="demo-simple-select-label">Brokers</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={brokers}
          label="Age"
          onChange={handleBrokersChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
        <FormGroup id="broker_hard_disk_usage">
          <FormLabel>Hard Disk Usage</FormLabel>
          <FormControlLabel
            control={<Checkbox name="global_topics_size" />}
            label="Global topics size"
          />
          <FormControlLabel
            control={<Checkbox name="log_size_per_broker" />}
            label="Log size per broker"
          />
        </FormGroup>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </center>
  );
}
