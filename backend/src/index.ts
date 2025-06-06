import { Socket } from "socket.io";
const express = require("express");
import http from "http";
const { Server } = require("socket.io")
const server = http.createServer(express())
const io = new Server(server)
io.on('connection', (socket: Socket) => {
    console.log("New User is  Connected")
})
server.listen(8181, () => {
    console.log("Server is running on port 8181");
})