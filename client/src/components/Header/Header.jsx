import styles from "./Header.module.css";
import PageTitle from "../../atoms/PageTitle/PageTitle";
import NavLink from "../../atoms/NavLink/NavLink";
import UserSetingsNav from "../UserSetingsNav/UserSetingsNav"
import { useUser } from "../../context/UserContext";
import { FaBars } from "react-icons/fa";
import CloseButton from "../../atoms/CloseButton/CloseButton";
import { useState } from "react";
import { Link } from "react-router-dom"

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false)
  const {user} = useUser()

  return (
    <header className={styles.header}>
      <div className={styles.header__title}>
        <Link to="/" title="Go to Home" className={styles["header__link-home"]}><PageTitle small={true} /></Link>
      </div>
      <nav className={styles.header__nav}>
        <CloseButton state={!isNavActive} setState={setIsNavActive} >
          <FaBars />
        </CloseButton>
        <ul className={`${styles.header__ul} ${isNavActive ? styles.active : ""}`}>
          <li tabIndex="-1"><NavLink to="/">Home</NavLink></li>
          { user
          ? (
          <li tabIndex="-2"><NavLink to="/log_on_chat">Get into a chat</NavLink></li>
          )
          : (
          <>
          <li tabIndex="-2"><NavLink to="/sing_in">Sing in</NavLink></li>
          <li tabIndex="-3"><NavLink to="/sing_up">Sing up</NavLink></li>
          </>
          )}
        </ul>
        {user && <UserSetingsNav />}
      </nav>
    </header>
  )
}