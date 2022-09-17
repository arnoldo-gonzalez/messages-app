import styles from "./Chat.module.css";
import SendMessageForm from "../../components/SendMessageForm/SendMessageForm";
import SectionOfMessages from "../../components/SectionOfMessages/SectionOfMessages";
import ListOfUsers from "../../components/ListOfUsers/ListOfUsers";
import ChatTitle from "../../atoms/ChatTitle/ChatTitle";

export default function Chat() {  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header className={styles["main__header"]}>
          <div id="close-btn-root"></div>
          <ChatTitle />
        </header>
        <SectionOfMessages />
        <SendMessageForm />
      </main>
      <ListOfUsers />
    </div>
  )
}
