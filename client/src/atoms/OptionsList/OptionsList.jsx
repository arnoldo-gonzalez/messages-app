import styles from "./OptionsList.module.css";
import { CgClose } from "react-icons/cg";
import useFocusControl from "../../hooks/useFocusControl";

export default function OptionsList({children, icon, text, position = "left"}) {
  const { hide, show, displayData, showData, clearTimeOuts } = useFocusControl()

  return (
    <div className={styles.container} onFocus={clearTimeOuts} onBlur={hide}>
      <button className={`${styles.btn} ${showData ? styles.active : ""}`} onClick={showData ? hide : show} aria-label={text}>
          {!showData ? icon : <CgClose />}
      </button>
      { displayData && (
      <ul tabIndex={showData ? undefined : "-1"} className={`${styles.ul} ${showData ? styles.active : styles.inactive} ${styles[position]}`}>
          {children(showData ? "0" : "-1")}
      </ul>
      )}
    </div>
  )
}
