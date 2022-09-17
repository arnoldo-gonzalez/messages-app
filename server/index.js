import express from "express";
import morgan from "morgan";
import cors from "cors";
import http from "http";
import { PORT } from "./configs.js";
import socketActions from "./socket/socket.js";
import { router as chatsRoutes } from"./api/chatsAPI.js";
import { router as userRoutes } from"./api/usersAPI.js";

// Initializations
import "./database/index.js";

const app = express()
const server = http.createServer(app)
socketActions(server)

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan("dev"))
app.use(cors())

app.use(chatsRoutes)
app.use(userRoutes)

server.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`)
})