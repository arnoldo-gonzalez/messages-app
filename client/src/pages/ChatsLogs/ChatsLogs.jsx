import styles from "./ChatsLogs.module.css";
import ChatLogsSections from "../../components/ChatLogsSections/ChatLogsSections";
import ChatSearchSection from "../../components/ChatSearchSection/ChatSearchSection";
import { useEffect } from "react"

export default function ChatsLogs() {
  useEffect(() => {
    document.title = "Enter in a chat"
  }, [])

  return (
    <main className={styles.main}>
      <h1 className={styles.main__h1}><b className={styles.red}>Log</b> or <b className={styles.green}>Create</b> a chat to <b className={styles.green}>connect</b> with your friends</h1>
      <ChatLogsSections />
      <ChatSearchSection />
    </main>
  )
}
