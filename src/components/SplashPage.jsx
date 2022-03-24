import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ListItemText, MenuItem, TextField } from '@mui/material';
import { ipcRenderer } from 'electron';

class SplashPage extends Component {
  constructor() {
    super();
  }

  handlePortEntry(event) {
    event.preventDefault();
    const port = document.getElementById('port').value;
    document.getElementById('port').value = '';
    ipcRenderer.send('port:add', port);
  }

  render() {
    return (
      <center>
        <MenuItem
          onClick={this.props.toggleSidebar}
          component={Link}
          to="/overview"
        >
          <ListItemText primary="Go to home" />
        </MenuItem>
        <form onSubmit={this.handlePortEntry}>
          <TextField id="port" label="Enter port" variant="outlined" />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </center>
    );
  }
}

export default SplashPage;
