import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import fetchResources from "../../services/fetchResources";
import Message from "../Message/Message";
import style from "./SectionOfMessages.module.css";
import { useSocket } from "../../context/SocketContext";
import { useUser } from "../../context/UserContext";
import Loading from "../../atoms/Loading/Loading";

export default function SectionOfMessages() {
  const {user: {token, id}} = useUser()
  const { chatId, socket } = useSocket()
  const url = `http://192.168.1.117:3000/api/${chatId}/getMessagesOfAnChat`;

  const {isLoading, data} = useFetch(() => fetchResources(url, token), "Messages on this chat")
  const [messages, setMessages] = useState(data)

  useEffect(() => {
    const handleMessage = (msg) => {
      console.log("NUEVO MESSAGE")
      setMessages(prev => {
        console.log(msg)
        return prev.concat(msg)
      })
    }

    socket.on("message", handleMessage)

    return () => {
      socket.off("message", handleMessage)
    }
  }, [])

  useEffect(() => {
    setMessages(data)
  }, [data])

  console.log(messages, socket.id)

  return (
    <section className={`${style.messages} ${messages.length === 0 ? style.center : ""}`}>
      { isLoading 
      ? <Loading text={true} />
      : messages.length === 0 
      ? <h2 className={style.messages__h2} >No have messages yet</h2>
      : messages.map( message => <Message key={message.id + Math.random() + Date.now()} other={message.user.id !== id} message={message}/>)
      }
    </section>
  )
}
