import { decodeJWT } from "../helpers/JWT.js";
import { getChat } from "../database/chatsDB.js";
import { getOneUser } from "../database/usersDB.js";

export async function getAllredyUsers(io, token, chatId) {
  const usersIterator = await io.to(chatId).fetchSockets()
  const users = []

  for (const userData of usersIterator) {
    const userToken = userData.handshake.auth.token

    if (userToken && userToken === token) continue

    const user = decodeJWT(userToken)

    if (!user) continue

    users.push({username: user.username, sid: userData.id})
  }

  return users
}

export async function validateConnection(socket, next) {
  const {token, chatId} = socket.handshake.auth
  const tokenError = new Error("Unathorized")
  tokenError.data = {code: 401}
  const chatIdError = new Error("Chat not found")
  chatIdError.data = {code: 404}

  if (!token) return next(tokenError)
  if (!chatId) return next(chatIdError)
  
  const userData = decodeJWT(token)
  if (!userData || !userData.uuid) return next(tokenError)

  const user = await getOneUser({uuid: userData.uuid})
  if (!user) return next(tokenError)

  const chat = await getChat(chatId).exec()
  if (!chat) return next(chatIdError)

  next()
}
