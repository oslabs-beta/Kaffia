import React from 'react';
import metricURLs from '../models/metricURLs';
import renderMetricPanels from './_utils/renderMetricPanels';

function BrokerZookeeper(props) {
    const {metrics} = props;
    return (
        <>
            <h1>Broker Zookeeper</h1>
            {metrics && renderMetricPanels(metrics, metricURLs.broker_zookeeper)}
        </>
    );
}

export default BrokerZookeeper;