import styles from "./LogoutBtn.module.css"
import {MdOutlineLogout} from "react-icons/md";
import { useUser } from "../../context/UserContext";
import { useAlerts } from "../../context/AlertsContext";

export default function LogoutBtn() {
  const {handleLogout} = useUser()
  const {types, handleToast} = useAlerts()

  const handleCLick = () => {
    handleToast("You have successfully logged out", types.info)
    return handleLogout()
  }

  return (
    <button title="Log out" className={styles.btn} onClick={handleCLick} >
      Log out
      <span><MdOutlineLogout alt="Logout" /></span>
    </button>
  )
}