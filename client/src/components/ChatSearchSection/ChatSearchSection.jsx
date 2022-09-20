import styles from "./ChatSearchSection.module.css";
import SearchForm from "../SearchForm/SearchForm";
import ChatCard from "../ChatCard/ChatCard";
import ChatsLogsSection from "../../atoms/ChatsLogsSection/ChatsLogsSection";
import Loading from "../../atoms/Loading/Loading";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import fetchResources from "../../services/fetchResources"
import { useUser } from "../../context/UserContext";

export default function ChatSearchSection() {
  const {user: {token}} = useUser()
  const url = `http://192.168.1.119:3000/api/getPublicChats`;
  const {isLoading, setData, data: chats} = useFetch(() => fetchResources(url, token), "Public chats");

  const [search, setSearch] = useState("")

  useEffect(() => {
    if (!chats?.length || !Array.isArray(chats)) return

    const newChats = chats.filter(chat => chat.title.toLowerCase().includes(search.toLowerCase()))

    setData(newChats)
  }, [search])

  return (
  <ChatsLogsSection list={true}>
    <h2><b data-color="green">Enter</b> on some <b data-color="red">public</b> chat</h2>
    <SearchForm tabIndex="5" search={search} setSearch={setSearch}/>
    <section className={styles["list-of-chats"]}>
      { isLoading 
        ? <Loading text={true} />
        : !chats?.length 
        ? <h4 className={styles["list-of-chats__h4"]}>No public chat found</h4>
        : chats.map(chat => <ChatCard key={chat.id} chat={chat} />)
      }
    </section>
  </ChatsLogsSection>
  )
}
