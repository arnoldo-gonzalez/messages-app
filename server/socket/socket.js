import {Server as SokectServer} from "socket.io";
import * as Actions from "./socketActions.js";
import { validateConnection, getAllredyUsers } from "./socketFunctions.js";
import { decodeJWT } from "../helpers/JWT.js";

export default function socket(server) { 
  const io = new SokectServer(server, {
    cors: {
      origin: ["http://192.168.1.117:5173", "http://192.168.1.119:5173", "http://localhost:5173"]
    }
  })
  
  io.use(validateConnection)

  io.on("connection", async socket => {
    const {token, chatId} = socket.handshake.auth
    const user = decodeJWT(token)

    socket.join(chatId)
    socket.to(chatId).emit("new_user", {username: user.username, sid: socket.id})

    const users = await getAllredyUsers(io, token, chatId)
    socket.emit("alredy_users", users)

    Object.entries(Actions).forEach( ([type, fn]) => {
      socket.on(type, (data) => fn({socket, io, data, room: chatId}))
    })
  })
}
