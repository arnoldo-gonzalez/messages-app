import styles from "./OptionsList.module.css"
import { useState, useRef } from "react";
import { CgClose } from "react-icons/cg";

let hideTimeOut;
let showTimeOut;

export default function OptionsList({children, icon, text}) {
  const [showOptions, setShowOptions] = useState(false)
  const ref = useRef(null)

  const handleClick = () => {
    if (hideTimeOut) clearTimeout(hideTimeOut);
    if (showTimeOut) clearTimeout(showTimeOut);

    if (showOptions) {
      hideTimeOut = setTimeout(() => {
        if (ref.current) ref.current.style.display = "none";
      }, 500);
      showTimeOut = setTimeout(() => {
        setShowOptions(prev => !prev)
      }, 0);
      return
    }
  
    if (ref.current) ref.current.style.display = "flex";
  
    showTimeOut = setTimeout(() => {
      setShowOptions(prev => !prev)
    }, 0);
  };

  return (
    <>
    <button tabIndex="5" className={`${styles.btn} ${showOptions ? styles.active : ""}`} onClick={handleClick} aria-label={text}>
        {!showOptions ? icon : <CgClose />}
    </button>
    <ul ref={ref} className={`${styles.ul} ${showOptions ? styles.active : ""}`}>
        {children}
    </ul>
    </>
  )
}
