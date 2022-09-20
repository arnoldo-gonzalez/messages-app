import styles from "./ChatsLogs.module.css"
import ChatLogsSections from "../../components/ChatLogsSections/ChatLogsSections";
import ChatSearchSection from "../../components/ChatSearchSection/ChatSearchSection";

export default function ChatsLogs() {
  return (
    <main className={styles.main}>
      <h1 className={styles.main__h1}><b className={styles.red}>Log</b> or <b className={styles.green}>Create</b> a chat to <b className={styles.green}>connect</b> with your friends</h1>
      <ChatLogsSections />
      <ChatSearchSection />
    </main>
  )
}
