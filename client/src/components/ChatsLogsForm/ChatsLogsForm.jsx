import styles from "./ChatsLogsForm.module.css";
import Input from "../../atoms/Input/Input"
import { useState } from "react";
import { useAlerts } from "../../context/AlertsContext"

const descriptions = {
  publicDescription: "All users will can see and get into this chat",
  privateDescription: "Nobody will can see this chat, and only users that have the chat id can get into"
}

export default function ChatsLogsForm({label, id, placeholder, name, createChat, onSubmit}) {
  const [data, setData] = useState(() => {
    if (createChat === "true") return {chatTitle: "", visibility: "public"}

    return {chatId: ""}
  })
  const [showData, setShowData] = useState("")
  const {types, handleToast} = useAlerts()

  const handleChange = ({target: {name, value}}) => {
    setData(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!data || Object.entries(data).some( ([key, value]) => !key || !value)) return

    const {privateDescription, publicDescription, ...validData} = data

    if (createChat === "true" && (validData.chatTitle.length < 2 || validData.chatTitle.length > 25) ) return handleToast("The length of chat title must be between 2 and 25", types.warn)

    if (createChat === "true") {
      onSubmit(validData, createChat)
        .then(chatId => {
            setShowData(chatId)
        })
    } else {
      onSubmit(validData, createChat)
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit} className={styles.form} data-createchat={createChat} >
      <Input value={createChat === "true" ? data.chatTitle : data.chatId} onChange={handleChange} label={label} id={id} name={name} required={true} placeholder={placeholder} type="text" />
      {createChat === "true" && (
      <>
        <div className={styles["visibility-container"]}>
          <label htmlFor="visibility" className={styles["visibility-container__label"]}>Chat Visibility:</label>
          <select name="visibility" className={styles["visibility-container__select"]} onChange={handleChange} required={true} id="visibility">
            <option name="public" value="public">Public</option>
            <option name="private" value="private">Private</option>
          </select>
        </div>
        <p className={styles["visibility-description"]}><span>Description:</span> {descriptions[data.visibility + "Description"]}</p>
      </>
      )}
      <Input value={createChat === "true" ? "Create the chat" : "Enter in the chat"} label={false} type="submit" />
    </form>
    { (showData && showData.length && createChat === "true") && <h4>This is your chat id: {showData}</h4>}
    </>
  )
}
