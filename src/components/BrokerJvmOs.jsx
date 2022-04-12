import React from 'react';
import metricURLs from '../models/metricURLs';
import renderMetricPanels from './_utils/renderMetricPanels';

function BrokerJVMAndOS(props) {
    const {metrics} = props;
    return (
        <>
            <h1>Broker JVM and OS Metrics</h1>
            {renderMetricPanels(metrics, metricURLs.broker_jvm_os)}
        </>
    );
}

export default BrokerJVMAndOS;