import styles from "./ChatLogsSections.module.css";
import ChatsLogsSection from "../../atoms/ChatsLogsSection/ChatsLogsSection";
import ChatsLogsForm from "../ChatsLogsForm/ChatsLogsForm";
import Loading from "../../atoms/Loading/Loading";
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useAlerts } from "../../context/AlertsContext";
import createChat from "../../services/createChat";

export default function ChatLogsSections() {
  const navigate = useNavigate()
  const {types, handleToast} = useAlerts()
  const {user: {token}, handleLogout} = useUser()
  const [isLoading, setIsLoading] = useState(false)

  const handleAction = (data, isCreateAChat) => {
    setIsLoading(true)
    
    if (isCreateAChat === "true") {
      return createChat(token, {title: data.chatTitle, visibility: data.visibility})
        .then(res => {
          setIsLoading(false)
          if (res.error && res.code === 401) {
            handleToast("You must be logged to to that action", types.error)
            return handleLogout()
          }
          return res.chatId
        })
    } else {
      const {chatId: chatToLogIn} = data
      
      navigate(`/${chatToLogIn}/chat`)
    }
    
  }

  return (
    <div className={styles["container-sections"]}>
      {isLoading && <Loading text={true} />}
      <ChatsLogsSection>
        <h2><b data-color="red">Enter</b> in a chat</h2>
        <ChatsLogsForm onSubmit={handleAction} createChat="false" id="chatId" name="chatId" label="Enter the chatId" placeholder="AssmKJd_12-da..."/>
      </ChatsLogsSection>
      <ChatsLogsSection>
        <h2><b data-color="green">Create</b> a chat</h2>
        <ChatsLogsForm onSubmit={handleAction} createChat="true" id="chatTitle" name="chatTitle" label="Enter the Title" placeholder="For example: My first chat"/>
      </ChatsLogsSection>
    </div>
  )
}
