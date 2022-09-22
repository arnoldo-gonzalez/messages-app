import styles from "./OptionsList.module.css"
import { useState } from "react";
import { CgClose } from "react-icons/cg";

let hideTimeOut;
let showTimeOut;
let actionTimeOut;

export default function OptionsList({children, icon, text}) {
  const [showOptions, setShowOptions] = useState(false)
  const [displayOptions, setDisplayOptions] = useState(false)

  const clearTimeOuts = () => {
    if (hideTimeOut) {
      clearTimeout(hideTimeOut)
      hideTimeOut = null
    };
    if (showTimeOut) {
      clearTimeout(showTimeOut)
      showTimeOut = null
    };
    if (actionTimeOut) {
      clearTimeout(actionTimeOut)
      actionTimeOut = null
    };
  }

  const hide = () => {
    clearTimeOuts()

    if (!showOptions) return

    actionTimeOut = setTimeout(() => {
      hideTimeOut = setTimeout(() => {
        setDisplayOptions(false)
      }, 500);

      showTimeOut = setTimeout(() => {
        setShowOptions(prev => !prev)
      }, 0);
    }, 0)
  }

  const show = () => {
    clearTimeOuts()

    if (showOptions) return

    actionTimeOut = setTimeout(() => {
      setDisplayOptions(true)
      showTimeOut = setTimeout(() => {
        setShowOptions(prev => !prev)
      }, 0);
    }, 0)
  };

  return (
    <div className={styles.container} onFocus={clearTimeOuts} onBlur={hide}>
      <button tabIndex="5" className={`${styles.btn} ${showOptions ? styles.active : ""}`} onClick={showOptions ? hide : show} aria-label={text}>
          {!showOptions ? icon : <CgClose />}
      </button>
      <ul className={`${styles.ul} ${showOptions ? styles.active : ""} ${displayOptions ? styles.flex : styles.hidde}`}>
          {children}
      </ul>
    </div>
  )
}
