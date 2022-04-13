import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from '@mui/material';
import {
  BarChart,
  Computer,
  ContentCopy,
  HealthAndSafety,
  Help,
  Home,
  Pets,
  Save,
  Topic,
} from '@mui/icons-material';
import { ipcRenderer } from 'electron';
import WhiteIcon from '../assets/white-icon.png';

export default function Sidebar(props) {
  const handleShutdown = () => {
    ipcRenderer.send('cluster:shutdown');
  };

  return (
    <Drawer id="sidebar" variant="permanent">
      <center>
        <img id="main-logo" src={WhiteIcon}></img>
        <h2 style={{ marginTop: 0 }}>Kaffia</h2>
        <Button sx={{ mb: 3 }} onClick={handleShutdown} variant="contained">
          Stop Cluster
        </Button>
      </center>
      <Divider />
      <List>
        <MenuItem component={Link} to="/">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </MenuItem>
        {props.elements.broker_hard_disk_usage && (
          <MenuItem component={Link} to="/brokerHardDiskUsage">
            <ListItemIcon>
              <Save />
            </ListItemIcon>
            <ListItemText primary="Hard Disk Usage" />
          </MenuItem>
        )}
        {props.elements.broker_jvm_os && (
          <MenuItem component={Link} to="/brokerJvmOs">
            <ListItemIcon>
              <Computer />
            </ListItemIcon>
            <ListItemText primary="Java Virtual Machine" />
          </MenuItem>
        )}
        {props.elements.broker_performance && (
          <MenuItem component={Link} to="/brokerPerformance">
            <ListItemIcon>
              <BarChart />
            </ListItemIcon>
            <ListItemText primary="Broker Performance" />
          </MenuItem>
        )}
        {props.elements.broker_zookeeper && (
          <MenuItem component={Link} to="/brokerZookeeper">
            <ListItemIcon>
              <Pets />
            </ListItemIcon>
            <ListItemText primary="Zookeeper" />
          </MenuItem>
        )}
        {props.elements.cluster_healthcheck && (
          <MenuItem component={Link} to="/clusterHealthcheck">
            <ListItemIcon>
              <HealthAndSafety />
            </ListItemIcon>
            <ListItemText primary="Cluster Healthcheck" />
          </MenuItem>
        )}
        {props.elements.cluster_replication && (
          <MenuItem component={Link} to="/clusterReplication">
            <ListItemIcon>
              <ContentCopy />
            </ListItemIcon>
            <ListItemText primary="Cluster Replication" />
          </MenuItem>
        )}
        {props.elements.topics_logs && (
          <MenuItem component={Link} to="/topicsLogs">
            <ListItemIcon>
              <Topic />
            </ListItemIcon>
            <ListItemText primary="Topics & Logs" />
          </MenuItem>
        )}
        <MenuItem component={Link} to="/HelpTab">
          <ListItemIcon>
            <Help />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </MenuItem>
      </List>
    </Drawer>
  );
}
