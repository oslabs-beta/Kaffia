import React from 'react';
import { Checkbox } from '@mui/material';

export default function Alerts() {
  const [alerts, setAlerts] = React.useState(false);

  const handleAlert = (event) => {
    setAlerts(event.target.value);
  };

  let metrics; 
  return (
    <center>
      <form>
        <Checkbox {...metrics} defaultChecked={true} onChange={handleAlert}/>
        {alerts}
      </form>
    </center>
  );
}
