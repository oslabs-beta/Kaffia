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
  Collapse,
} from '@mui/material';
import { Equalizer, Home, Settings, TrendingUp } from '@mui/icons-material';
import { ipcRenderer } from 'electron';
import WhiteIcon from '../assets/white-icon.png';

export default function Sidebar() {
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
          <ListItemText primary="Overview" />
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/cluster">
          <ListItemIcon>
            <Equalizer />
          </ListItemIcon>
          <ListItemText primary="Cluster Metrics" />
        </MenuItem>
        <Collapse in={true} component="li" timeout="auto">
          <List disablePadding sx={{ ml: 6 }}>
            <MenuItem component={Link} to="/brokerHardDiskUsage">
              <ListItemText primary="Broker Hard Disk Usage" />
            </MenuItem>
            <MenuItem component={Link} to="/brokerJVMOS">
              <ListItemText primary="Broker JVM and OS" />
            </MenuItem>
            <MenuItem component={Link} to="/brokerPerformance">
              <ListItemText primary="Broker Performance" />
            </MenuItem>
            <MenuItem component={Link} to="/brokerZookeeper">
              <ListItemText primary="Broker Zookeeper" />
            </MenuItem>
            <MenuItem component={Link} to="/clusterHealthcheck">
              <ListItemText primary="Cluster Healthcheck" />
            </MenuItem>
            <MenuItem component={Link} to="/clusterReplication">
              <ListItemText primary="Cluster Replication" />
            </MenuItem>
            <MenuItem component={Link} to="/topicsLogs">
              <ListItemText primary="Topics Logs" />
            </MenuItem>
            <MenuItem component={Link} to="/HelpTab">
              <ListItemText primary="HelpTab" />
            </MenuItem>
          </List>
        </Collapse>
        <Divider />
        <MenuItem component={Link} to="/settings">
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </MenuItem>
      </List>
    </Drawer>
  );
}
