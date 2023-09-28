const { getSocketKey } = require("../../utils");
const { getHandleClientData, getHandleClientDisconnect } = require("../active_socket");
const { addClient } = require("../../clients");

// event handler for "connection" event on passive socket
const handleClientConnection = (newActiveSocket) => {
    console.log(`${getSocketKey(newActiveSocket)} is now connected`);

    // adding event listeners to active socket
    newActiveSocket.on("data", getHandleClientData(newActiveSocket));
    newActiveSocket.on("end", getHandleClientDisconnect(newActiveSocket));

    // adding client to list of connected clients
    addClient(newActiveSocket);
}


module.exports = {
    handleClientConnection
}