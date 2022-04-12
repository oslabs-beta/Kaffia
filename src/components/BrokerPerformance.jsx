import React from 'react';
import metricURLs from '../models/metricURLs';
import renderMetricPanels from './_utils/renderMetricPanels';

function BrokerPerformance(props) {
    const {metrics} = props;
    return (
        <>
            <h1>Broker Performance</h1>
            {renderMetricPanels(metrics, metricURLs.broker_performance)}
        </>
    );
}

export default BrokerPerformance;