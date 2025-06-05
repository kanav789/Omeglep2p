import { Socket } from "socket.io"
interface User {
    name: string;
    socket: Socket;
}
export class UserManager {
    private users: User[]
    private queue: string[]
    constructor() {
        this.users = []
        this.queue = []
    }
    addUser(name: string, socket: Socket) {
        this.users.push({
            name, socket
        })
        this.queue.push(socket.id)
        this.clearQueue()
    }
    removeUser(name: string, socket: Socket) {
        // Remove user from the list
        this.users = this.users.filter(x => x.socket.id !== socket.id)
    }
    clearQueue() { }

}