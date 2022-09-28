import styles from "./Nav.module.css";
import NavLink from "../../atoms/NavLink/NavLink";
import CloseButton from "../../atoms/CloseButton/CloseButton";
import { useUser } from "../../context/UserContext";
import { FaBars } from "react-icons/fa";
import useFocusControl from "../../hooks/useFocusControl";

export default function Nav() {
  const {showData, displayData, hide, show, clearTimeOuts} = useFocusControl()
  const {user} = useUser();
  const responsive = window.matchMedia("(min-width: 800px)").matches

  return (
    <nav className={styles.nav} onBlur={hide} onFocus={clearTimeOuts} aria-labelledby="primary-navigation">
      <CloseButton state={!showData} setState={showData ? hide : show} >
        <FaBars />
      </CloseButton>
      <ul className={`${styles.nav__ul} ${showData ? styles.active : styles.inactive} ${displayData || responsive ? "" : styles.hide}`}>
        <li><NavLink tabIndex={showData || responsive ? "0" : "-1"} to="/">Home</NavLink></li>
        { user
        ? <li><NavLink tabIndex={showData || responsive ? "0" : "-1"} to="/log_on_chat">Get into a chat</NavLink></li>
        : (
        <>
        <li><NavLink tabIndex={showData || responsive ? "0" : "-1"} to="/sing_in">Sing in</NavLink></li>
        <li><NavLink tabIndex={showData || responsive ? "0" : "-1"} to="/sing_up">Sing up</NavLink></li>
        </>
        )}
      </ul>
    </nav>
  )
}
