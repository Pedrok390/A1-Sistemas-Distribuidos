const WebSocket = require("ws");

const wss = new WebSocket.Server({port: 9082});

wss.on("connection", ws=> {
    console.log("New Client connected");

    ws.on("close", () =>{
        console.log("Client has disconnected");
    })
}) 