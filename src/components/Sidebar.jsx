import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Divider,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Collapse,
} from '@mui/material';
import { Equalizer, Home, Settings, TrendingUp } from '@mui/icons-material';

export default function Sidebar() {
  return (
    <Drawer variant="permanent">
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
