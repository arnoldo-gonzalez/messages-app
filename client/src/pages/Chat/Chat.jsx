import styles from "./Chat.module.css";
import AuthenticeteRedirect from "../../components/AuthenticateRedrect";
import io from "socket.io-client"
import SendMessageForm from "../../components/SendMessageForm/SendMessageForm";
import SectionOfMessages from "../../components/SectionOfMessages/SectionOfMessages";

export default function Chat() {
  const user = JSON.parse(localStorage.getItem("account"))
  let socket;

  if (user) socket = io("http://192.168.1.119:3000")
  return (
    <>
    { !user ? <AuthenticeteRedirect/> : (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <h2>In this place will be the users</h2>
      </aside>
      <main className={styles.main}>
        <h1 className={styles.main__h1}>In this place will be the title of the chat</h1>
        <SectionOfMessages socket={socket} user={user} />
        <SendMessageForm socket={socket} user={user} />
      </main>
    </div>
    )}
    </>
  )
}