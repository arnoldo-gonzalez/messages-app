import styles from "./OptionsList.module.css"
import { useState } from "react";
import { CgClose } from "react-icons/cg";

export default function OptionsList({children, icon, text}) {
  const [showOptions, setShowOptions] = useState(false)

  const handleClick = () => setShowOptions(prev => !prev)

  return (
    <>
    <button tabIndex="5" className={`${styles.btn} ${showOptions ? styles.active : ""}`} onClick={handleClick} aria-label={text}>
        {!showOptions ? icon : <CgClose />}
    </button>
    <ul className={`${styles.ul} ${showOptions ? styles.active : ""}`}>
        {children}
    </ul>
    </>
  )
}
