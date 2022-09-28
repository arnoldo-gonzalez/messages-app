import styles from "./UserChatsCreated.module.css";
import Loading from "../../atoms/Loading/Loading"
import ChatCard from "../ChatCard/ChatCard";
import useFetch from "../../hooks/useFetch";
import { useUser } from "../../context/UserContext";

export default function UserChatsCreated() {
  const {user: {token}} = useUser()
  const url = "http://192.168.1.117:3000/api/getChatsOfAndUser"
  const { data: chats, isLoading } = useFetch(url, token, "Chats created by you")

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Here are the <b className="green">chats</b> created by you</h1>
      <section className={styles.section}>
        { isLoading
          ? <Loading text={true} />
          : !chats.length
          ? <h2 className={styles.section__h2}>You have not created any chat yet</h2>
          : chats.map(chat => <ChatCard key={chat.id} chat={chat}/>)
        }
      </section>
    </div>
  )
}
