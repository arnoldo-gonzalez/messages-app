import styles from "./ChatCard.module.css"
import { useNavigate } from "react-router-dom"

export default function ChatCard ({chat: {title, id, visibility}}) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/${id}/chat`)
  }

  return (
  <article className={styles.article}>
    <div className={styles.article__content}>
      <h3 className={styles.article__h3}><span>Title:</span> {title}</h3>
      {!!visibility && <h3 className={styles.article__h3}><span>Visibility:</span> {visibility}</h3>}
    </div>
    <button onClick={handleClick} className={styles.article__btn}>Enter on chat!</button>
  </article>
  )
}
