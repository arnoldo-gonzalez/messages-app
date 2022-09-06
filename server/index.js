import express from "express";
import morgan from "morgan";
import cors from "cors";
import http from "http";
import { PORT } from "./configs.js";
import socketActions from "./socket/socket.js";
import { router } from "./api/informationApi.js";

// Initializations
const app = express()
const server = http.createServer(app)
socketActions(server)

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan("dev"))
app.use(cors())

app.use(router)

server.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`)
})