const fs = require('fs');
const dataFile = 'data.json';

const readData = () => {
    const data = fs.readFileSync(dataFile);
    return JSON.parse(data);
};

const writeData = (data) => {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
};

module.exports = {
    readData,
    writeData
};