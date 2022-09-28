import styles from "./ChatSearchSection.module.css";
import SearchForm from "../SearchForm/SearchForm";
import ChatCard from "../ChatCard/ChatCard";
import ChatsLogsSection from "../../atoms/ChatsLogsSection/ChatsLogsSection";
import Loading from "../../atoms/Loading/Loading";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useUser } from "../../context/UserContext";

export default function ChatSearchSection() {
  const {user: {token}} = useUser()
  const url = `/api/getPublicChats`;
  const {isLoading, setData, data: chats} = useFetch(url, token, "Public chats");

  const [search, setSearch] = useState("")

  return (
  <ChatsLogsSection list={true}>
    <h2><b data-color="green">Enter</b> on some <b data-color="red">public</b> chat</h2>
    <SearchForm tabIndex="5" search={search} setSearch={setSearch}/>
    <section className={styles["list-of-chats"]}>
      { isLoading 
        ? <Loading text={true} />
        : !chats?.length 
        ? <h4 className={styles["list-of-chats__h4"]}>No public chat found</h4>
        : chats.filter(({title}) => title.toLowerCase().includes(search.toLowerCase())).map(chat => <ChatCard key={chat.id} chat={chat} />)
      }
    </section>
  </ChatsLogsSection>
  )
}
