// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */

"use strict";

// Depends
var http = require("http");
var express = require("express");
var io = require("socket.io");

// Initialize
var app = express();
var server = http.createServer(app);
var sio = io(server);

var port = 8080;
server.listen(port, function() {
    console.log("Start express server on port", port);
});

// Functions
sio.on("connection", function(socket) {
    socket.on("event", function(data) {
        console.log("Event", data);
    });
});

// Static files
app.use(express.static(__dirname));

// Load homepage by default
app.get("/", function (req, res) {
    console.log("Serve homepage");
    res.sendFile(__dirname + "/index.html");
});
