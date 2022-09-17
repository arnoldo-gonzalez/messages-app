import { Router } from "express";
import { validateText, validateVisibility } from "../helpers/validations.js";
import { createID } from "../helpers/createIdentifiners.js";
import { validateJWT, validateChatId } from "../helpers/middlewares.js";
import { createChat, getPublicChats } from "../database/chatsDB.js"

export const router = Router()

router.post("/api/createChat", validateJWT, (req, res) => {
  const {title, visibility} = req.body
  const lowerCasedVisibility = visibility.toLowerCase()

  if (!validateText(title) || !validateVisibility(lowerCasedVisibility)) {
    return res.json({ok: false, error: "Invalid data"})
  }

  const chatId = createID()
  console.log(chatId)
  createChat({chatId, title, visibility: lowerCasedVisibility})
    .then( () => {
      res.json({ok: true, error: null, chatId})
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
