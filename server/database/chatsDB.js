import { Chat, Message } from "./models.js";

export function createChat({chatId, title, visibility}) {
  console.log({chatId, title})
  const newChat = new Chat({
    id: chatId,
    title,
    visibility
  })

  return newChat.save()
}

export async function addOneMessage({chatId, msg}) {
  const {date, body, user, id} = msg
  const newMessage = new Message({date, body, user, id})

  const chat = await Chat.findOne({id: chatId})

  chat.messages = chat.messages.concat(newMessage)

  return chat.save()
}

export function getPublicChats() {
  return Chat.find({visibility: "public"})
}

export function getChat(chatId) {
  return Chat.findOne({id: chatId})
}
