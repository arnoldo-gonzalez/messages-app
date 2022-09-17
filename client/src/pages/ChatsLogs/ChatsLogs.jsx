import styles from "./ChatsLogs.module.css"
import PageTitle from "../../atoms/PageTitle/PageTitle";
import { useUser } from "../../context/UserContext";
import ChatLogsSections from "../../components/ChatLogsSections/ChatLogsSections";
import ChatSearchSection from "../../components/ChatSearchSection/ChatSearchSection";
import UserSetingsNav from "../../components/UserSetingsNav/UserSetingsNav";

export default function ChatsLogs() {
  const {user: {username}} = useUser()

  return (
    <div className={styles.container}>
    <header className={styles.header}>
      <h3 className={styles.header__h3}>Hello {username}</h3>
      <UserSetingsNav />
    </header>
    <main className={styles.main}>
      <PageTitle />
      <ChatLogsSections />
      <ChatSearchSection />
    </main>
    </div>
  )
}
