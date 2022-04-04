import React, { Component, useState } from 'react';
const { clipboard } = require('electron')
import { CopyToClipboard } from 'react-copy-to-clipboard';

const HelpTab = () => {
  
  const [copiedText, setCopiedText] = useState('');
  const topic = 'docker exec -it kafka101 \
  kafka-topics \
  --create \
  --partitions 6 \
  --replication-factor 3 \
  --topic demo-topic \
  --bootstrap-server kafka101:29092';
  const producer = 'docker exec -it kafka101 \
  kafka-producer-perf-test \
  --throughput 500 \
  --num-records 100000000 \
  --topic demo-topic \
  --record-size 100 \
  --producer-props bootstrap.servers=kafka101:29092';
  const consumer = 'docker exec -it kafka101 \
  kafka-consumer-perf-test \
  --messages 100000000 \
  --timeout 1000000 \
  --topic demo-topic \
  --reporting-interval 1000 \
  --show-detailed-stats \
  --bootstrap-server kafka101:29092';

  return (
    <div>
      <h1>HelpTab</h1>
      <h3>Create a Topic:</h3>
      <div class="codeblock">
        <span class="code" value={topic} >$ docker exec -it kafka101 \ <br></br>
          kafka-topics \<br></br>
          --create \<br></br>
          --partitions 6 \<br></br>
          --replication-factor 3 \<br></br>
          --topic demo-topic \<br></br>
          --bootstrap-server kafka101:29092<br></br>
        </span>
        <CopyToClipboard text={copiedText}>
          <button type="button" id="topic" class="copyButton" onClick={e => setCopiedText(topic)} >Copy</button>
        </CopyToClipboard>
      </div>
      <h3>Produce messages:</h3>
      <div class="codeblock">
        <span class="code" value={producer} >$ docker exec -it kafka101 \ <br></br>
          kafka-producer-perf-test \<br></br>
          --throughput 500 \<br></br>
          --num-records 100000000 \<br></br>
          --topic demo-topic \<br></br>
          --record-size 100 \<br></br>
          --producer-props bootstrap.servers=kafka101:29092<br></br>
        </span>
        <CopyToClipboard text={copiedText}>
          <button type="button" id="producer" class="copyButton" onClick={e => setCopiedText(producer)} >Copy</button>
        </CopyToClipboard>
      </div>
      <h3>Consume messages:</h3>
      <div class="codeblock">
        <span class="code" value={consumer} >$ docker exec -it kafka101 \ <br></br>
          kafka-consumer-perf-test \<br></br>
          --messages 100000000 \<br></br>
          --timeout 1000000 \<br></br>
          --topic demo-topic \<br></br>
          --reporting-interval 1000 \<br></br>
          --show-detailed-stats \<br></br>
          --bootstrap-server kafka101:29092<br></br>
        </span>
        <CopyToClipboard text={copiedText}>
          <button type="button" id="consumer" class="copyButton" onClick={e => setCopiedText(consumer)} >Copy</button>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default HelpTab;
