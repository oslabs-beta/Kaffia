import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';

class SplashPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <MenuItem
          onClick={this.props.toggleSidebar}
          component={Link}
          to="/overview"
        >
          <ListItemText primary="Go to home" />
        </MenuItem>
      </>
    );
  }
}

export default SplashPage;
