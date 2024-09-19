var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

var messages = [
    {
        id: 1,
        text: "Hola mundo, este es un mensaje",
        author: "Nuñez",
    },
];


app.use(express.static("public"));

io.on("connection", function (socket) {
    console.log("Alguien se ha conectado con Sockets");
    socket.emit("messages", messages);

    socket.on("new-message", function (data) {
        messages.push(data);
        io.sockets.emit("messages", messages);
    });
});

server.listen(8081, function () {
    console.log("Servidor corriendo en el puerto http://localhost:8081");
});
