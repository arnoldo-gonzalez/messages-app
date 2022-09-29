import styles from "./LogoutBtn.module.css"
import {MdOutlineLogout} from "react-icons/md";
import { useUser } from "../../context/UserContext";
import { useAlerts } from "../../context/AlertsContext";

export default function LogoutBtn({tabIndex}) {
  const {handleLogout} = useUser()
  const {types, handleToast} = useAlerts()

  const handleCLick = () => {
    handleToast("You have successfully logged out", types.info)
    return handleLogout()
  }

  return (
    <button tabIndex={tabIndex} title="Log out" className={styles.btn} onClick={handleCLick} >
      <span><MdOutlineLogout alt="Logout" /></span>
      Log out
    </button>
  )
}
