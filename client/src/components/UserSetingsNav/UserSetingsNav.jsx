import styles from "./UserSetingsNav.module.css";
import OptionsList from "../../atoms/OptionsList/OptionsList";
import LogoutBtn from "../../components/LogoutBtn/LogoutBtn";
import { useUser } from "../../context/UserContext";
import { FaUserAlt, FaUserCog } from "react-icons/fa";
import { Link } from "react-router-dom"

export default function UserSetingsNav () {
  const {user: {username}} = useUser()

  return (
    <OptionsList icon={<FaUserAlt aria-label="User settings icon" />} text="Open and close the user settings">
      {(tabIndex) => (
      <>
        <li className={styles["container__li-name"]}>{username}</li>
        <li><Link tabIndex={tabIndex} to="/user_settings" className={styles["user-settings"]}><span><FaUserCog /></span>User settings</Link></li>
        <li><LogoutBtn tabIndex={tabIndex} /></li>
      </>
      )}
    </OptionsList>
  )
}
