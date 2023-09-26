const net = require("net");


const handleClientConnection = () => {
    console.log("Client connected");
}

const server = net.createServer();
server.on("connection", handleClientConnection);

server.listen(3000, '127.0.0.1', 5, () => {
    console.log("Server started")
});