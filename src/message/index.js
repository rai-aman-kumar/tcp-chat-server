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

module.exports = {
    message,
    forwardMessage,
    broadcastMessage,
    broadcastMessageToGroup
}