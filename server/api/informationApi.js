import { Router } from "express";
import {getAllMessage, getAllUsers, getOneUser} from "../database/database.js";

export const router = Router()

router.get("/api/getAllUsers", (req, res) => {
  res.json(getAllUsers())
})

router.get("/api/getMessagesOfAnChat", (req, res) => {
  res.json(getAllMessage())
})

router.post("/api/getOneUser", (req, res) => {
  const {email, password} = req.body
  const user = getOneUser({email, password})
  console.log(user)
  if (user) res.status(200).json({ok: true, user})
  else res.json({ok: false})
})