function getSocketKey(socket) {
    return `${socket.remoteAddress}:${socket.remotePort}`
}

module.exports = {
    getSocketKey
}