import {IoMdSend} from "react-icons/io";
import styles from "./SendMessageForm.module.css";
import { useUser } from "../../context/UserContext";
import { useSocket } from "../../context/SocketContext";

export default function SendMessageForm() {
  const {user} = useUser()
  const { socket } = useSocket()

  const handleSubmit = e => {
    e.preventDefault()
    const {target: form} = e
    const message = form.message.value

    if (!message) return
    
    socket.emit("new_message", {
      user,
      message,
      date: Date.now()
    })

    form.message.value = ""
  }
  
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea name="message" aria-label="Write a message" placeholder="Write a message..."></textarea>
      <button aria-label="Send" title="Send message" type="submit">
        <IoMdSend />
      </button>
    </form>
  )
}
