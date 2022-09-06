import styles from "./Alert.module.css"
import {CgClose} from "react-icons/cg"
import { useEffect, useState } from "react"

export default function Alert({type, title, body, handleRemove, duration = 10000}) {
  const [isHide, setIsHide] = useState(false)
  const classes = `${styles.message} ${styles[type]} ${(isHide ? styles.hide : styles.show)}`

  console.log(classes)

  const handleHide = () => {
    setIsHide(true)
    setTimeout(handleRemove, 1000)
  }

  useEffect(() => {
    const hideTimeOut = setTimeout(handleHide, duration)

    return () => {
      clearTimeout(hideTimeOut)
    }
  }, [])

  return (
    <article className={classes}>
      <h4 className={styles.message__h4}>{title}</h4>
      <p className={styles.message__p}>{body}</p>
      <button onClick={handleHide} className={styles.message__button}>
        <CgClose />
      </button>
    </article>
  )
}