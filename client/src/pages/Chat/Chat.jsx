import styles from "./Chat.module.css";
import SendMessageForm from "../../components/SendMessageForm/SendMessageForm";
import SectionOfMessages from "../../components/SectionOfMessages/SectionOfMessages";
import ListOfUsers from "../../components/ListOfUsers/ListOfUsers";
import ChatTitle from "../../atoms/ChatTitle/ChatTitle";
import OptionsList from "../../atoms/OptionsList/OptionsList";
import { IoSettingsSharp } from "react-icons/io5"
import { useSocket } from "../../context/SocketContext";

export default function Chat() {
  const {chatId} = useSocket()

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header className={styles["main__header"]}>
          <ChatTitle />
          <div id="close-btn-root" className={styles["close-btn-root"]}>
            <OptionsList icon={<IoSettingsSharp />} text="Open and close the Chat settings">
              <li>Chat Settings</li>
              <li className={styles["chatId-li"]}>Chat id: {chatId}</li>
            </OptionsList>
          </div>
        </header>
        <SectionOfMessages />
        <SendMessageForm />
      </main>
      <ListOfUsers />
    </div>
  )
}
