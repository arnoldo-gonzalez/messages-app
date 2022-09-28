import styles from "./ListOfUsers.module.css";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom"
import User from "../User/User";
import CloseButton from "../../atoms/CloseButton/CloseButton";
import * as Handlers from "../../helpers/usersEventsHandlers";
import { useSocket } from "../../context/SocketContext";
import { FaUserFriends } from "react-icons/fa";

const el = document.createElement("div")

export default function ListOfUsers() {
  const [active, setActive] = useState(false)
  const { socket } = useSocket()
  const closeListBtn = useRef()
  const openListBtn = useRef()

  const [users, setUsers] = useState([])

  const handleOpenList = (newState) => {
    setActive(newState)
    if(!active) closeListBtn.current.focus()
    else openListBtn.current.focus()
  }  

  useEffect(() => {
    const closeBtnPlace = document.getElementById("close-btn-root")
    closeBtnPlace.insertBefore(el, closeBtnPlace.firstChild)

    const handleAlredyUsers = Handlers.createHandleAlredyUsers(setUsers)
    const handleNewUser = Handlers.createHandleNewUser(setUsers)
    const handleDisconnect = Handlers.createHandleDisconnect(setUsers)

    socket.on("new_user", handleNewUser)
    socket.on("alredy_users", handleAlredyUsers)
    socket.on("user_disconnect", handleDisconnect)

    return () => {
      socket.off("new_user", handleNewUser)
      socket.off("alredy_users", handleAlredyUsers)
      socket.off("user_disconnect", handleDisconnect)
    }
  }, [])

  return (
    <>
    {createPortal(
    <CloseButton state={true} ref={openListBtn} setState={handleOpenList}>
      <FaUserFriends />
    </CloseButton>
    , el)}
    <aside className={`${styles.aside} ${active ? styles.active : ""}`}>
      <CloseButton ref={closeListBtn} state={false} hide={!active} setState={handleOpenList} />
      {users.length === 0 
      ? <h1 className={styles.aside__h1}>You're the only user in this chat</h1>
      : users.map( ({username, sid}) => <User key={sid} name={username} />)
      }
    </aside>
    </>
  )
}
