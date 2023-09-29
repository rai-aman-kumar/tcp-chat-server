const { getSocketKey } = require("../utils");

const connectedClients = {
}

// adds active client's socket info
const addClient = (socket) => {
    const clientKey = getSocketKey(socket);
    connectedClients[clientKey] = socket;
}

// removes disconnected client's info
const removeClient = (socket) => {
    const clientKey = getSocketKey(socket);
    delete connectedClients[clientKey];
}


module.exports = {
    addClient,
    removeClient
}