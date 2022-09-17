import { decodeJWT } from "../helpers/JWT.js";
import {getChat} from "../database/chatsDB.js";
import {getOneUser} from "../database/usersDB.js";

export async function validateJWT(req, res, next) {
  const token = req.get("Authorization")
  if (!token || !token.toLowerCase().startsWith("bearer") || token.length < 8 ) {
    return res.status(401).json({ok: false, error: "Unauthorized"})
  }

  const userData = decodeJWT(token.substring(7))
  
  if (!userData || !userData.uuid) return res.status(401).json({ok: false, error: "Unauthorized"})

  const user = await getOneUser({uuid: userData.uuid})

  if (!user) return res.status(401).json({ok: false, error: "Unauthorized"})

  req.userData = userData

  next()
}

export async function validateChatId(req, res, next) {
  const { chatId } = req.params

  if (!chatId) return res.status(404).json({ok: false, error: "Page not found"})

  const chat = await getChat(chatId).exec()

  if (!chat) return res.status(404).json({ok: false, error: "Page not found"})

  req.chat = {
    title: chat.title,
    messages: chat.messages,
    id: chat.id
  }

  next()
}
