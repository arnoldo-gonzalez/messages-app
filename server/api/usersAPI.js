import { randomUUID } from "crypto";
import { Router } from "express";
import { validateEmail, validateText, validatePassword } from "../helpers/validations.js";
import { createJWT } from "../helpers/JWT.js";
import { emailAlredyExist, createUser, getOneUser } from "../database/usersDB.js";
import {hash, compare} from "bcrypt";

export const router = Router()

router.post("/api/sing_up", async (req, res) => {
  const {email, password, re_password, username} = req.body
  
  if (!validateEmail(email) || !validateText(username) || !validatePassword(password, re_password)) {
    return res.json({ok: false, token: null, error: "Invalid data"})
  }

  const userWithThisEmail = await emailAlredyExist({email})

  if (userWithThisEmail) {
    return res.json({ok: false, user: null, error: "Email alredy used"})
  }

  hash(password, 10, (err, hashPassword) => {
    if (err) return res.status(500).json({ok: false, error: "Failed to create the account"})

    const uuid = randomUUID()
    const token = createJWT({username, uuid})
  
    createUser({email, hashPassword, username, uuid})
      .then(user => {
        if (!user) res.status(500).json({ok: false, user: null, error: "Error on create the user"})
        console.log({
          username,
          email,
          token,
        })
        res.json({ok: true, error: null, user: {
          username,
          email,
          token
        }})
      })
  })
  console.log("AAAAAA")
})

router.post("/api/sing_in", async (req, res) => {
  const {email, password} = req.body
  
  getOneUser({email})
    .then((user) => {
      if (!user) return res.json({ok: false, error: "Email or password are wrong"})

      if (user.error) return res.status(500).json({ok: false, error: "Error on create the account"})

      compare(password, user.password, (err, same) => {

        if (!same || err) return res.json({ok: false, error: "Email or password are wrong"})

        const {username, uuid} = user
        const token = createJWT({username, uuid})
      
        return res.status(200).json({ok: true, user: {
          username,
          token,
          id: uuid
        }})
      })
    })
})
