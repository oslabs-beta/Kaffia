const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

// take in number of brokers to launch
module.exports = (brokerCount) => {
    try {
        const config = yaml.load(fs.readFileSync(path.join(__dirname, './configs/templates/zk-kafka-single-node-stack.yml'), 'utf8'));
        console.log(config);

        const newConfig = config.services.kafka.environment.KAFKA_BROKER_COUNT;
        newConfig.KAFKA_BROKER_COUNT = brokerCount;
        console.log(newConfig);

        fs.writeFileSync(path.join(__dirname, `./configs/config_kafka${100 + brokerCount}.yml`), yaml.safeDump(config));
        
    } catch(e) {
        console.log(e);
    }
}




    //     // iterate over number of brokers
    //     // const doc = yaml.load(fs.readFileSync(path.join(__dirname, './kafka-monitoring-stack-docker-compose/zk-kafka-single-node-stack.yml'), 'utf8'));
    //     console.log(doc);
    // } catch(e) {
    //     console.log(e);
    // }

//     return;
// };