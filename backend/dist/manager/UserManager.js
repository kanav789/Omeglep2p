"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
class UserManager {
    constructor() {
        this.users = [];
        this.queue = [];
    }
    addUser(name, socket) {
        this.users.push({
            name, socket
        });
        this.queue.push(socket.id);
        this.clearQueue();
    }
    removeUser(socketId) {
        // Remove user from the list
        this.users = this.users.filter(x => x.socket.id !== socketId);
        this.queue = this.queue.filter(x => x === socketId);
    }
    clearQueue() {
        if (this.queue.length > 2) {
            return;
        }
        const user1 = this.users.find(x => x.socket.id === this.queue.pop());
        const user2 = this.users.find(x => x.socket.id === this.queue.pop());
        // const roomId =this.generate()
        // user1?.socket.emit("new-room",{
        //     type:"send-offer",
        //     roomId
        // })
    }
}
exports.UserManager = UserManager;
