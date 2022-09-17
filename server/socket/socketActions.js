import { addOneMessage } from "../database/chatsDB.js";
import { createID } from "../helpers/createIdentifiners.js";
import { decodeJWT } from "../helpers/JWT.js";

export const disconnect = ({socket, io, room}) => {
  io.to(room).emit("user_disconnect", socket.id)
};

export const new_message = ({io, socket, data: {user, message, date}, room}) => {
  const {chatId} = socket.handshake.auth
  const msgID = createID()

  const {username, token} = user
  const decodedUser = decodeJWT(token)

  if (!decodedUser) return socket.disconnect(true)

  const msg = {
    date,
    id: msgID,
    body: message,
    user: {
      username: decodedUser.username,
      id: decodedUser.uuid
    }
  }

  addOneMessage({chatId, msg})
  io.to(room).emit("message", {...msg, user: {username, id: decodedUser.uuid}})
};
