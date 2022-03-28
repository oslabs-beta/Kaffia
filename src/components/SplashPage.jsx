import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ListItemText, MenuItem, Select, TextField } from '@mui/material';
import { ipcRenderer } from 'electron';

class SplashPage extends Component {
  constructor() {
    super();
  }

  handleBrokerSelection(event) {
    event.preventDefault();
    const brokerCount = document.getElementById('broker-number').value;
    document.getElementById('port').value = '';
    ipcRenderer.send('cluster:start', port);
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
        <form onSubmit={this.handleBrokerSelection}>
          <Select
            labelId="broker-number"
            id="broker-number"
            value={'brokerCount'}
            label="Broker Count"
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </center>
    );
  }
}

export default SplashPage;
