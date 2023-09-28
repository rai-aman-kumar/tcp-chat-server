const { getSocketKey } = require("../utils");

const connectedClients = {
}

// adds active client's socket info
const addClient = (socket) => {
    console.log(Object.keys(connectedClients).length);
    const clientKey = getSocketKey(socket);
    connectedClients[clientKey] = socket;
    console.log(Object.keys(connectedClients).length);
}

// removes disconnected client's info
const removeClient = (socket) => {
    console.log(Object.keys(connectedClients).length);
    const clientKey = getSocketKey(socket);
    delete connectedClients[clientKey];
    console.log(Object.keys(connectedClients).length);
}


module.exports = {
    addClient,
    removeClient
}