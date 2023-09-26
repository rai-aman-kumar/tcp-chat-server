const { getSocketKey } = require("../../utils");
const { getHandleClientData, getHandleClientDisconnect } = require("../active_socket");

// event handler for "connection" event on passive socket
const handleClientConnection = (newActiveSocket) => {

    console.log(`${getSocketKey(newActiveSocket)} is now connected`);

    // adding event listeners to active socket
    newActiveSocket.on("data", getHandleClientData(newActiveSocket));
    newActiveSocket.on("end", getHandleClientDisconnect(newActiveSocket));

}


module.exports = {
    handleClientConnection
}