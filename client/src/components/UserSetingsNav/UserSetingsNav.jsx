import styles from "./UserSetingsNav.module.css"
import OptionsList from "../../atoms/OptionsList/OptionsList"
import LogoutBtn from "../../components/LogoutBtn/LogoutBtn";
import { useUser } from "../../context/UserContext";
import { FaUserAlt, FaUserCog } from "react-icons/fa";

export default function UserSetingsNav () {
  const {user: {username}} = useUser()

  return (
    <nav className={styles.nav}>
      <OptionsList icon={<FaUserAlt />} text="Open and close the user settings">
        <li tabIndex="6" className={styles["nav__li-name"]}>{username}</li>
        <li tabIndex="7"><span><FaUserCog /></span>User settings</li>
        <li tabIndex="8"><LogoutBtn /></li>
      </OptionsList>
    </nav>
  )
}
