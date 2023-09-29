const { getSocketKey } = require("../../utils");
const { getHandleClientData, getHandleClientDisconnect } = require("../active_socket");
const { addClient } = require("../../clients");
const { userNameInitMessage } = require("../../message");

// event handler for "connection" event on passive socket
const handleClientConnection = (newActiveSocket) => {
    console.log(`${getSocketKey(newActiveSocket)} has a tcp connection now`);

    // adding event listeners to active socket
    newActiveSocket.on("data", getHandleClientData(newActiveSocket));
    newActiveSocket.on("end", getHandleClientDisconnect(newActiveSocket));

    // adding client to list of connected clients
    // addClient(newActiveSocket);
    userNameInitMessage(newActiveSocket);
}


module.exports = {
    handleClientConnection
}

/*
    {
        meta: {
            type: "USERNAME_INIT"
        },
        data: {
            message: "aman"
        }
    }
*/


