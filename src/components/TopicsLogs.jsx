import React from 'react';
import renderMetricPanels from './_utils/renderMetricPanels';

function TopicsLogs(props) {
  const { metrics, metricURLs } = props;
  return (
    <>
      <h1>Topic Logs</h1>
      {metrics && renderMetricPanels(metrics, metricURLs)}
    </>
  );
}

export default TopicsLogs;
