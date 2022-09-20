import { Router } from "express";
import { validateText, validateVisibility } from "../helpers/validations.js";
import { createID } from "../helpers/createIdentifiners.js";
import { validateJWT, validateChatId } from "../helpers/middlewares.js";
import { createChat, getPublicChats } from "../database/chatsDB.js"

export const router = Router()

router.post("/api/createChat", validateJWT, (req, res) => {
  const {title, visibility} = req.body
  const lowerCasedVisibility = visibility.toLowerCase()

  if (!validateText(title) || !validateVisibility(lowerCasedVisibility) || title.length > 25) {
    return res.json({ok: false, error: "Invalid data"})
  }

  const chatId = createID()
  const user = req.user

  createChat({chatId, title, visibility: lowerCasedVisibility})
    .then( () => {
      user.chats = user.chats.concat({title, id: chatId})
      user.save()
        .then(() => res.json({ok: true, error: null, chatId}))
        .catch(() => res.json({ok: true, error: "Error on save the chat", chatId}))
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ok: false, error: "Error on create the chat"})
    })
})

router.get("/api/getPublicChats", validateJWT, async (req, res) => {
  const chats = await getPublicChats().exec()

  const dataToSend = chats.map( ({title, id}) => ({title, id}))

  res.json(dataToSend)
})

router.get("/api/:chatId/getMessagesOfAnChat", validateJWT, validateChatId, (req, res) => {
  const { messages } = req.chat
  res.json(messages)
})

router.get("/api/:chatId/getChatTitle", validateJWT, validateChatId, (req, res) => {
  const { title } = req.chat

  res.json({title})
})
