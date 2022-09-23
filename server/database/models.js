import mongoose from "mongoose";
const {Schema, model} = mongoose

const userSchema = new Schema({
  username: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  uuid: {type: String, required: true, unique: true},
  chats: [
    {
      title: String,
      id: String,
      visibility: String
    }
  ]
})

const messageSchema = new Schema({
  user: {
    username: {type: String, required: true},
    id: {type: String, required: true}
  },
  body: {type: String, required: true},
  date: {type: Number, required: true},
  id: String
})

const chatSchema = new Schema({
  title: {type: String, required: true},
  visibility: {type: String, required: true},
  id: {type: String, required: true, unique: true},
  messages: [messageSchema]
})

export const User = model("User", userSchema)

export const Message = model("Message", messageSchema)

export const Chat = model("Chat", chatSchema)
