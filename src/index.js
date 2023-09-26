const net = require("net");
const { PORT_NUMBER, ADDRESS, BACKLOG } = require("./constants");
const { getSocketKey } = require("./utils");

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
    }
    return handleClientDisconnect;
}


const handleClientConnection = (newActiveSocket) => {

    console.log(`${getSocketKey(newActiveSocket)} is now connected`);

    // adding event listeners to active socket
    newActiveSocket.on("data", getHandleClientData(newActiveSocket));
    newActiveSocket.on("end", getHandleClientDisconnect(newActiveSocket));

}

const server = net.createServer();
server.on("connection", handleClientConnection);

server.listen(PORT_NUMBER, ADDRESS, BACKLOG, () => {
    console.log(`Server started on port: ${PORT_NUMBER}`)
});