import { useEffect, useRef, useState } from "react"
import useFetch from "../../hooks/useFetch"
import getMessagesOfAnChat from "../../services/getAllMessages"
import Message from "../Message/Message"
import style from "./SectionOfMessages.module.css"

export default function SectionOfMessages({socket, user}) {
  const {isLoading, data} = useFetch(getMessagesOfAnChat)
  const [messages, setMessages] = useState(data)
  const section = useRef(null)

  useEffect(() => {
    socket.on("message", (msg) => {
      console.log("NUEVO MESSAGE")
      setMessages(prev => {
        console.log(prev)
        return prev.concat(msg)
      })
    })
  }, [])

  useEffect(() => {
    setMessages(data)
  }, [data])

  return (
    <section ref={section} className={style.messages}>
      {messages.length === 0 
      ? <h2>No have messages yet</h2>
      : messages.map( message => <Message key={message.id + Math.random() + Date.now()} other={message.user.id !== user.id} message={message}/>)
      }
    </section>
  )
}