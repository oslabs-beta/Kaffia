import React from 'react';
import metricURLs from '../models/metricURLs';
import renderMetricPanels from './_utils/renderMetricPanels';

function BrokerHardDiskUsage(props) {
    const {metrics} = props;
    return (
        <>
            <h1>Broker Hard Disk Usage</h1>
            {metrics && renderMetricPanels(metrics, metricURLs.broker_hard_disk_usage)}
        </>
    );
}

export default BrokerHardDiskUsage;