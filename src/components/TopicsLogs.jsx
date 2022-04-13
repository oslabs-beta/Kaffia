import React from 'react';
import metricURLs from '../models/metricURLs';
import renderMetricPanels from './_utils/renderMetricPanels';

function TopicsLogs(props) {
    const {metrics} = props;
    return (
        <>
            <h1>Topic Logs</h1>
            {metrics && renderMetricPanels(metrics, metricURLs.topics_logs)}
        </>
    );
}

export default TopicsLogs;