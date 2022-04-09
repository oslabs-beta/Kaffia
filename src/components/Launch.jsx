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
        <FormGroup onChange={handleMetricsChange} id="broker_hard_disk_usage">
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
        <FormGroup onChange={handleMetricsChange} id="broker_jvm_os">
          <FormLabel>Java Virtual Machine</FormLabel>
          <FormControlLabel
            control={<Checkbox name="memory_usage" />}
            label="Memory usage"
          />
          <FormControlLabel
            control={<Checkbox name="garbage_collection" />}
            label="Garbage collection"
          />
          <FormControlLabel
            control={<Checkbox name="cpu_usage" />}
            label="CPU usage"
          />
          <FormControlLabel
            control={<Checkbox name="open_file_descriptors" />}
            label="Open file descriptors"
          />
          <FormControlLabel
            control={<Checkbox name="available_memory" />}
            label="Available memory"
          />
        </FormGroup>
        <FormGroup onChange={handleMetricsChange} id="broker_performance">
          <FormLabel>Broker Performance</FormLabel>
          <FormControlLabel
            control={<Checkbox name="request_total_time" />}
            label="Total request time"
          />
          <FormControlLabel
            control={<Checkbox name="idle_percent" />}
            label="Idle time percent"
          />
          <FormControlLabel
            control={<Checkbox name="request_rate" />}
            label="Request rate"
          />
          <FormControlLabel
            control={<Checkbox name="queue_size" />}
            label="Queue size"
          />
          <FormControlLabel
            control={<Checkbox name="queue_time" />}
            label="Queue time"
          />
          <FormControlLabel
            control={<Checkbox name="time_placeholder" />}
            label="Time placeholder"
          />
        </FormGroup>
        <FormGroup onChange={handleMetricsChange} id="broker_zookeeper">
          <FormLabel>Zookeeper</FormLabel>
          <FormControlLabel
            control={<Checkbox name="zookeeper_metrics" />}
            label="Key Zookeeper metrics"
          />
        </FormGroup>
        <FormGroup onChange={handleMetricsChange} id="cluster_healthcheck">
          <FormLabel>Cluster Health</FormLabel>
          <FormControlLabel
            control={<Checkbox name="core_healthcheck" />}
            label="Core cluster health stats"
          />
          <FormControlLabel
            control={<Checkbox name="throughput_io" />}
            label="Throughput I/O"
          />
          <FormControlLabel
            control={<Checkbox name="isr_count_change" />}
            label="In-sync-replica issues"
          />
          <FormControlLabel
            control={<Checkbox name="leaders_partitions" />}
            label="Partition and leader data"
          />
        </FormGroup>
        <FormGroup onChange={handleMetricsChange} id="cluster_replication">
          <FormLabel>Cluster Replication</FormLabel>
          <FormControlLabel
            control={<Checkbox name="replication_io" />}
            label="Replication I/O"
          />
          <FormControlLabel
            control={<Checkbox name="replication_lag" />}
            label="Replication lag"
          />
          <FormControlLabel
            control={<Checkbox name="replica_fetcher" />}
            label="Replica fetcher metrics"
          />
        </FormGroup>
        <FormGroup onChange={handleMetricsChange} id="topics_logs">
          <FormLabel>Logs</FormLabel>
          <FormControlLabel
            control={<Checkbox name="log_info" />}
            label="Key log info"
          />
        </FormGroup>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </center>
  );
}
