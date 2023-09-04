import { useUser } from "../../context/UserContext";
import styles from "./UserSettingsIndex.module.css";

export default function UserSettingsIndex() {
  const {user: {username}} = useUser()

  return (
    <div className={styles.content}>
      <h1 className={styles.content__title}>Hello <b>{username}</b></h1>
      <p className={styles.content__text}>Here you can find information about your account and activity on <i><b>Messages</b> <b className="red">Read</b><b className="green">Writters</b></i>. Use the left menu to select the information that you want to see.</p>
    </div>
  )
}