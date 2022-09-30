import express from "express";
import morgan from "morgan";
import cors from "cors";
import http from "http";
import { dirname, join } from 'path';
import { fileURLToPath } from 'node:url';
import { PORT } from "./configs.js";
import socketActions from "./socket/socket.js";
import { router as chatsRoutes } from"./api/chatsAPI.js";
import { router as userRoutes } from"./api/usersAPI.js";

// Initializations
import "./database/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const app = express()
const server = http.createServer(app)
socketActions(server)

app.use((req, res, next) => {
  if (req.url.startsWith("/assets")) {
    res.append("Cache-Control", "public, max-age=172800000")
    res.append("Expires", new Date(Date.now() + 172800000).toUTCString())
  }
  next()
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan("dev"))
app.use(cors())
app.use(express.static(join(__dirname, "../client/dist/")))

app.use(chatsRoutes)
app.use(userRoutes)

app.use((req, res) => {
  if (!req.url.includes(".")) res.sendFile("index.html", {root: join(__dirname, "../client/dist/")})
})

server.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`)
})
