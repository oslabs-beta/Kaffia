import React from 'react';
import metricURLs from '../models/metricURLs';
import renderMetricPanels from './_utils/renderMetricPanels';

function ClusterHealthCheck(props) {
    const {metrics} = props;
    return (
        <>
            <h1>Cluster Health Check</h1>
            {metrics && renderMetricPanels(metrics, metricURLs.cluster_healthcheck)}
        </>
    );
}

export default ClusterHealthCheck;