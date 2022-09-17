import styles from "./ChatCard.module.css"
import { useNavigate } from "react-router-dom"

export default function ChatCard ({chat: {title, id}}) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/${id}/chat`)
  }

  return (
  <article className={styles.article}>
    <h3 className={styles.article__h3}><span>Title:</span> {title}</h3>
    <button onClick={handleClick} className={styles.article__btn}>Enter on chat!</button>
  </article>
  )
}
