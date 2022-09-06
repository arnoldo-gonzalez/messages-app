import { useState } from "react";
import {IoMdSend} from "react-icons/io";
import Alert from "../Alert/Alert";
import styles from "./SendMessageForm.module.css";

export default function SendMessageForm({socket, user}) {
  const [isAlerted, setIsAlerted] = useState(false)

  const handleRemove = () => {
    setIsAlerted(false)
  }

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
    <>
    {isAlerted && <Alert handleRemove={handleRemove} title="Invalid message" type="warning" body="you cann't send messages with '<' or '>'" />}
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" name="message" placeholder="Write a message" />
      <button title="Send message" type="submit">
        <IoMdSend />
      </button>
    </form>
    </>
  )
}