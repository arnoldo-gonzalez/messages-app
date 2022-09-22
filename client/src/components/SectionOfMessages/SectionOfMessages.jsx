import { useEffect, useRef } from "react"
import useFetch from "../../hooks/useFetch"
import Message from "../Message/Message";
import style from "./SectionOfMessages.module.css";
import { useSocket } from "../../context/SocketContext";
import { useUser } from "../../context/UserContext";
import Loading from "../../atoms/Loading/Loading";

let renders = 0
let scrollToBottom = true

export default function SectionOfMessages() {
  const {user: {token, id}} = useUser()
  const { chatId, socket } = useSocket()
  const ref = useRef()
  const url = `http://192.168.1.119:3000/api/${chatId}/getMessagesOfAnChat`;
  const {isLoading, data: messages, setData: setMessages} = useFetch(url, token, "Messages on this chat")
  const prevDate = {year: "", month: "", day: "", weekDay: ""}

  const changeDate = (newDate) => Object.entries(newDate).forEach(([key, value]) => prevDate[key] = value)

  useEffect(() => {
    const handleMessage = msg => {
      const e = ref.current
      const scroll = e.scrollHeight - e.scrollTop
      if ( scroll === e.clientHeight || scroll - 230 <= e.clientHeight ) {
        scrollToBottom = true
      }
      setMessages(prev => prev.concat(msg))
    }
    socket.on("message", handleMessage)
    return () => {
      socket.off("message", handleMessage)
      renders = 0
      scrollToBottom = true
      localStorage.removeItem(chatId)
    }
  }, [])

  useEffect(() => {
    const e = ref.current
    if (scrollToBottom || renders === 1) {
      e.scrollTo(0, e.scrollHeight)
      scrollToBottom = false
    }
    renders++
  }, [messages])

  return (
    <section id="test" ref={ref} className={`${style.messages} ${messages.length === 0 ? style.center : ""}`}>
      { isLoading 
      ? <Loading text={true} />
      : messages.length === 0 
      ? <h2 className={style.messages__h2} >No have messages yet</h2>
      : messages.map( message => (
            <Message prevDate={prevDate} setPrevDate={changeDate} key={message.id} other={message.user.id !== id} message={message}/>
          )
        )
      }
    </section>
  )
}
