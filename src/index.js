const net = require("net");
const { PORT_NUMBER, ADDRESS, BACKLOG } = require("./constants");
const { handleClientConnection } = require("./events/passive_socket");


const server = net.createServer();
// add "connection" event handler on passive socket
server.on("connection", handleClientConnection);

server.listen(PORT_NUMBER, ADDRESS, BACKLOG, () => {
    console.log(`Server started on port: ${PORT_NUMBER}`)
});