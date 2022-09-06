import {Server as SokectServer} from "socket.io";
import * as Actions from "./socketActions.js";

export default function socket(server) {
  const io = new SokectServer(server, {
    cors: {
      origin: "http://127.0.0.1:5173"
    }
  })

  io.on("connection", socket => {
    console.log("userConnected", socket.id);
    console.log(socket.handshake.auth);
    Object.entries(Actions).forEach( ([type, fn]) => {
      socket.on(type, (data) => fn({socket, io, data}))
    })
  })
}