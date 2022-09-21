import jwt from "jsonwebtoken";
import {SECRET} from "../configs.js"

export function createJWT({username, uuid}) {
  return jwt.sign({username, uuid}, SECRET, {
    expiresIn: "1d"
  })
}

export function decodeJWT(token) {
  try {
    const data = jwt.verify(token, SECRET)
    return data
  } catch (error) {
    return null
  }
}