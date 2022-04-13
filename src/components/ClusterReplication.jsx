import React from 'react';
import metricURLs from '../models/metricURLs';
import renderMetricPanels from './_utils/renderMetricPanels';

function ClusterReplication(props) {
    const {metrics} = props;
    return (
        <>
            <h1>Cluster Replication</h1>
            {metrics && renderMetricPanels(metrics, metricURLs.cluster_replication)}
        </>
    );
}

export default ClusterReplication;