import styles from "./Header.module.css";
import PageTitle from "../../atoms/PageTitle/PageTitle";
import UserSetingsNav from "../UserSetingsNav/UserSetingsNav";
import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom"
import Nav from "../Nav/Nav"

export default function Header() {
  const {user} = useUser()

  return (
    <header className={styles.header}>
      <div className={styles.header__title}>
        <Link to="/" title="Go to Home" className={styles["header__link-home"]}><PageTitle small={true} /></Link>
      </div>
      <div className={styles["header__container-nav"]}>
        <Nav />
        {user && <UserSetingsNav />}
      </div>
    </header>
  )
}
