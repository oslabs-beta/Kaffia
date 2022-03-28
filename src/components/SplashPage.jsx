import React, { Component } from 'react';
import { Button, InputLabel, MenuItem, Select } from '@mui/material';
import { ipcRenderer } from 'electron';

export default function SplashPage() {
  const [brokers, setBrokers] = React.useState(1);

  const handleBrokerEntry = (event) => {
    event.preventDefault();
    const brokers = parseInt(event.target[0].value);
    ipcRenderer.send('brokers:input', brokers);
  };

  const handleChange = (event) => {
    setBrokers(event.target.value);
  };

  return (
    <center>
      <form onSubmit={handleBrokerEntry}>
        <InputLabel id="demo-simple-select-label">Brokers</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={brokers}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </center>
  );
}
