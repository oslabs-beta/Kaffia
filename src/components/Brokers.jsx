import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MetricCard from './MetricCard';
import Grid from '@mui/material/Grid';

function Brokers() {
    const [broker, setBroker] = useState([]);

  useEffect(() => {
    fetch('https://api.neko-atsume.emshea.com/cats')
      .then((res) => res.json())
      .then((data) => {
        console.log("brokerInUseEffect: ", broker);
        return setBroker(data)
  })
      .catch((err) => console.log(err));
    
  }, [setBroker]);

  console.log("broker: ", broker);
  return (
    <div>
      <h1>Brokers</h1>
      <Grid container spacing={1} rowSpacing={3} columnSpacing={3}>
        {broker.map((metric, i) => (
          <Grid item xs={6} columnSpacing={4} key={`GridItem${i}`}>
          <MetricCard metric={metric} key={`${metric.CatId}${metric.CatName}${i}`} />
             {/* <MetricCard metric={broker[0]} key={`${broker[0].CatId}${broker[0].CatName}${i}`} /> */}
          </Grid>
            ))}
        </Grid>
    </div>
  );

}

  // const [brokers, setBrokers] = useState([]);

  // useEffect(() => {
  //   // fetch('http://localhost:9090/api/v1/query?query=kafka_server_brokerstate')
  //   fetch('https://api.neko-atsume.emshea.com/cats')
  //     .then((res) => res.json())
  //     .then((data) => setBrokers(data));
  //     // .then((data) => setBrokers(data.data.result));
  // }, [setBrokers]);


  // return (
  //   <div>
  //     <h1>Brokers Hi</h1>
  //     <ul>
  //       {brokers.map((broker) => (
  //         <li key={broker.id}>
  //           {broker.CatName}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
// }

      {/* <table>
        <thead>
          <tr>
            <th>Broker ID</th>
            <th>Host</th>
            <th>Port</th>
            <th>Version</th>
            <th>Endpoints</th>
            <th>Topics</th>
            <th>Partitions</th>
            <th>Replicas</th>
            <th>Offline</th>
            <th>Controller</th>
            <th>Leader</th>
            <th>Zookeeper</th>
            <th>Isr</th>
            <th>Cpu</th>
            <th>Memory</th>
            <th>Disk</th>
            <th>Log</th>
            <th>Log Size</th>
            <th>Log Time</th>

          </tr>
        </thead>
        <tbody>
          {brokers.map((broker) => (
            <tr key={broker.broker_id}>
              <td>1{broker.broker_id}</td>
              <td>1{broker.host}</td>
              <td>1{broker.port}</td>
              <td>1{broker.version}</td>
              <td>1{broker.endpoints}</td>
              <td>1{broker.topics}</td>
              <td>1{broker.partitions}</td>
              <td>1{broker.replicas}</td>
              <td>1{broker.offline}</td>
              <td>1{broker.controller}</td>
              <td>1{broker.leader}</td>
              <td>1{broker.zookeeper}</td>
              <td>1{broker.isr}</td>
              <td>1{broker.cpu}</td>
              <td>1{broker.memory}</td>
              <td>1{broker.disk}</td>
              <td>1{broker.log}</td>
              <td>1{broker.log_size}</td>
              <td>1{broker.log_time}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
//     </div>
//   );
// }


export default Brokers;