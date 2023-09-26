const net = require("net");
const { PORT_NUMBER, ADDRESS, BACKLOG } = require("./constants");
const { getSocketKey } = require("./utils");

const handleClientConnection = (newActiveSocket) => {

    console.log(`${getSocketKey(newActiveSocket)} is now connected`);

    newActiveSocket.on("data", (data) => {
        console.log(`${getSocketKey(newActiveSocket)} sent message: ${data}`);
    });

    newActiveSocket.on("end", () => {
        console.log(`${getSocketKey(newActiveSocket)} is now disconnected`)
    })

}

const server = net.createServer();
server.on("connection", handleClientConnection);

server.listen(PORT_NUMBER, ADDRESS, BACKLOG, () => {
    console.log(`Server started on port: ${PORT_NUMBER}`)
});