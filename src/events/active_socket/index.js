const { getSocketKey } = require("../../utils");
const { removeClient } = require("../../clients");

// returns active socket specific handler for "data" event
const getHandleClientData = (socket) => {
    const handleClientData = (data) => {
        console.log(`${getSocketKey(socket)} sent message: ${data}`);
    };
    return handleClientData;
}

// returns active socket specific handler for "end" event
const getHandleClientDisconnect = (socket) => {
    const handleClientDisconnect = () => {
        console.log(`${getSocketKey(socket)} is now disconnected`);

        // removing client info from connectedClients
        removeClient(socket);
    }
    return handleClientDisconnect;
}

module.exports = {
    getHandleClientData,
    getHandleClientDisconnect
}