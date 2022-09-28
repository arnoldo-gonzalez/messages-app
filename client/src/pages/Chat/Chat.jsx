import styles from "./Chat.module.css";
import SendMessageForm from "../../components/SendMessageForm/SendMessageForm";
import SectionOfMessages from "../../components/SectionOfMessages/SectionOfMessages";
import ListOfUsers from "../../components/ListOfUsers/ListOfUsers";
import ChatTitle from "../../atoms/ChatTitle/ChatTitle";
import OptionsList from "../../atoms/OptionsList/OptionsList";
import { IoSettingsSharp } from "react-icons/io5";
import { FiCopy } from "react-icons/fi";
import { useSocket } from "../../context/SocketContext";
import { useAlerts } from "../../context/AlertsContext";

export default function Chat() {
  const { chatId } = useSocket();
  const { types, handleToast } = useAlerts();

  const handleCopyOfChatId = () => {
    navigator.clipboard.writeText(chatId)
      .then(() => {
        handleToast("Sucessfully copy of chat id of this chat", types.success);
      });
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header className={styles["main__header"]}>
          <ChatTitle />
          <div id="close-btn-root" className={styles["close-btn-root"]}>
            <OptionsList icon={<IoSettingsSharp />} text="Open and close the Chat settings" position="center">
              <li>Chat Settings</li>
              <li className={styles["chatId-li"]}><FiCopy className={styles.icon} /><button onClick={handleCopyOfChatId}>Chat id: {chatId}</button></li>
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
