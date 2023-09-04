import { useUser } from "../../context/UserContext";
import styles from "./UserSettings.module.css";
import { Outlet, NavLink } from "react-router-dom"
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";

export default function UserSettings() {
  const {user: {username}} = useUser()

  const changeClasses = ({isActive}) => {
    return isActive ? `${styles.main__li} ${styles.active}` : styles.main__li
  }

  useEffect(() => {
    document.title = `User Settings | ${username}`
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <main className={styles.main}>
      <nav className={styles.main__nav} aria-labelledby="navigation to change the content of user settings">
        <h4 className={styles.main__h4}>Options</h4>
        <ul className={styles.main__ul}>
          <li className={styles.main__li}><NavLink className={changeClasses} to="info">Your information</NavLink></li>
          <li className={styles.main__li}><NavLink className={changeClasses} to="chats_created">Chats Created</NavLink></li>
        </ul>
      </nav>
      <Outlet/>
    </main>
    <Footer />
    </>
  )
}
