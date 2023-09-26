const { getSocketKey } = require("../../utils");
const { getHandleClientData, getHandleClientDisconnect } = require("../active_socket");


const connectedClients = {

};


// event handler for "connection" event on passive socket
const handleClientConnection = (newActiveSocket) => {

    console.log(`${getSocketKey(newActiveSocket)} is now connected`);

    console.log(Object.keys(connectedClients).length);
    connectedClients[getSocketKey(newActiveSocket)] = newActiveSocket;
    console.log(Object.keys(connectedClients).length);

    // adding event listeners to active socket
    newActiveSocket.on("data", getHandleClientData(newActiveSocket));
    newActiveSocket.on("end", getHandleClientDisconnect(newActiveSocket));
}


module.exports = {
    handleClientConnection
}