import styles from "./UserSetingsNav.module.css"
import OptionsList from "../../atoms/OptionsList/OptionsList"
import LogoutBtn from "../../components/LogoutBtn/LogoutBtn";
import { useUser } from "../../context/UserContext";
import { FaUserAlt, FaUserCog } from "react-icons/fa";

export default function UserSetingsNav () {
  const {user: {username}} = useUser()

  return (
    <div className={styles.container}>
      <OptionsList icon={<FaUserAlt />} text="Open and close the user settings">
        <li className={styles["container__li-name"]}>{username}</li>
        <li><span><FaUserCog /></span>User settings</li>
        <li><LogoutBtn /></li>
      </OptionsList>
    </div>
  )
}
