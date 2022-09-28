import { h1 } from "./ChatTitle.module.css";
import useFetch from "../../hooks/useFetch";
import { useSocket } from "../../context/SocketContext";
import { useUser } from "../../context/UserContext";
import { useEffect } from "react";

export default function ChatTitle() {
  const {user: {token}} = useUser()
  const {chatId} = useSocket()
  const url = `/api/${chatId}/getChatTitle`
  const { data, isLoading } = useFetch(url, token)

  useEffect(() => {
    document.title = isLoading ? "Chat | Loading" : `Chat | ${data.title}`
  }, [data])

  return (
  <h1 className={h1}>{isLoading !== false ? "Loading the chat title" : data.title}</h1>
  )
}
