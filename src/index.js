const net = require("net");
const { PORT_NUMBER, ADDRESS, BACKLOG } = require("./constants");

const handleClientConnection = (newActiveSocket) => {

    console.log(`${newActiveSocket.remoteAddress}:${newActiveSocket.remotePort} is now connected`);

    newActiveSocket.on("data", (data) => {
        console.log(`${newActiveSocket.remoteAddress}:${newActiveSocket.remotePort} sent message: ${data}`);
    });

}

const server = net.createServer();
server.on("connection", handleClientConnection);

server.listen(PORT_NUMBER, ADDRESS, BACKLOG, () => {
    console.log(`Server started on port: ${PORT_NUMBER}`)
});