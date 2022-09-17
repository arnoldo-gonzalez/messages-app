import { CgClose } from "react-icons/cg";
import styles from "./CloseButton.module.css"

export default function CloseButton({children, state, setState, hidden = false, flote = false}) {
  const handleState = () => {
    setState(prev => !prev)
  }

  return (
    <button onClick={handleState} className={`${styles.btn} ${hidden ? styles.hidden : ""} ${flote ? styles.flote : ""}`}>
      {state
      ? children
      : <CgClose />
      }
    </button>
  )
}
