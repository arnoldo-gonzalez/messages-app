import {h1} from "./ChatTitle.module.css"
import useFetch from "../../hooks/useFetch"
import fetchResources from "../../services/fetchResources"
import { useSocket } from "../../context/SocketContext"
import { useUser } from "../../context/UserContext"

export default function ChatTitle() {
  const {user: {token}} = useUser()
  const {chatId} = useSocket()
  const url = `http://192.168.1.117:3000/api/${chatId}/getChatTitle`
  const { data, isLoading } = useFetch(() => fetchResources(url, token))

  return (
  <h1 className={h1}>{isLoading ? "Loading the chat title" : data.title}</h1>
  )
}
