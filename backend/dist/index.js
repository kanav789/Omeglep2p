"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http_1 = __importDefault(require("http"));
const { Server } = require("socket.io");
const server = http_1.default.createServer(express());
const io = new Server(server);
io.on('connection', (socket) => {
    console.log("New User is  Connected");
});
server.listen(8181, () => {
    console.log("Server is running on port 8181");
});
