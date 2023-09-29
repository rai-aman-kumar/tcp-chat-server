// reply to the client directly
const message = (senderSocket, message, encoding = "utf-8") => {
    senderSocket.write(message, encoding);
}

// forward message from sender client to receiver client
const forwardMessage = (senderSocket, receiveClientSocket) => {

}

// forward message from sender client to all connected clients
const broadcastMessage = (senderSocket) => {

}

// forward message from sender client to all connected clients of a group
const broadcastMessageToGroup = (senderSocket) => {

}

// sends username request to newly connected tcp client
const userNameInitMessage = (clientSocket, encoding = "utf-8") => {
    const response = {
        meta: {
            "type": "USERNAME_INIT"
        },
        data: {
            message: "Enter your user name"
        }
    }


    clientSocket.write(JSON.stringify(response), encoding);

}


module.exports = {
    message,
    forwardMessage,
    broadcastMessage,
    broadcastMessageToGroup,
    userNameInitMessage
}