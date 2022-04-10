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
import { makeStyles } from '@mui/styles';
import { Equalizer, Home, Settings, TrendingUp } from '@mui/icons-material';
import { ipcRenderer } from 'electron';

const classes = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  paper: {
    background: 'yellow',
  },
});

export default function Sidebar() {
  const handleShutdown = () => {
    ipcRenderer.send('cluster:shutdown');
  };

  return (
    <Drawer classes={{ paper: classes.paper }} variant="permanent">
      <center>
        <img
          id="main-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wikimedia-logo.png/100px-Wikimedia-logo.png"
        ></img>
        <h2>Kaffia</h2>
        <Button onClick={handleShutdown} variant="contained">
          Stop Cluster
        </Button>
      </center>
      <Divider />
      <List sx={{ color: 'primary.main' }}>
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
            <MenuItem component={Link} to="/brokers">
              <ListItemText primary="Brokers" />
            </MenuItem>
            <MenuItem component={Link} to="/consumers">
              <ListItemText primary="Consumers" />
            </MenuItem>
            <MenuItem component={Link} to="/producers">
              <ListItemText primary="Producers" />
            </MenuItem>
            <MenuItem component={Link} to="/topics">
              <ListItemText primary="Topics" />
            </MenuItem>
            <MenuItem component={Link} to="/HelpTab">
              <ListItemText primary="HelpTab" />
            </MenuItem>
          </List>
        </Collapse>
        <Divider />
        <MenuItem component={Link} to="/performance">
          <ListItemIcon>
            <TrendingUp />
          </ListItemIcon>
          <ListItemText primary="Performance Metrics" />
        </MenuItem>
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
