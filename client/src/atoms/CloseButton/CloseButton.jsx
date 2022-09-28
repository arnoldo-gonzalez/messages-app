import styles from "./CloseButton.module.css"
import { forwardRef } from "react";
import { CgClose } from "react-icons/cg";

const CloseButton = forwardRef(({children, state, setState, hidden = false}, ref) => {
  const handleState = () => {
    setState(prev => !prev)
  }

  return (
    <button onClick={handleState} ref={ref} className={`${styles.btn} ${hidden ? styles.hidden : ""}`}>
      {state
      ? children
      : <CgClose />
      }
    </button>
  )
})

export default CloseButton
