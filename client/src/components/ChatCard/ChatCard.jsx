import styles from "./ChatCard.module.css";
import { FiCopy } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAlerts } from "../../context/AlertsContext";

export default function ChatCard ({chat: {title, id, visibility}}) {
  const navigate = useNavigate()
  const { types, handleToast } = useAlerts();

  const handleCopyOfChatId = () => {
    navigator.clipboard.writeText(id)
      .then(() => {
        handleToast("Sucessfully copy of chat id of this chat", types.success);
      });
  };

  const handleClick = () => {
    navigate(`/${id}/chat`)
  }

  return (
  <article className={styles.article}>
    <div className={styles.article__content}>
      <h3 className={styles.article__h3}><span>Title:</span> {title}</h3>
      {!!visibility && <h3 className={styles.article__h3}><span>Visibility:</span> {visibility}</h3>}
      <button className={styles.article__copybtn} onClick={handleCopyOfChatId}><span>Copy ChatID</span> <FiCopy className={styles.icon} /></button>
    </div>
    <button onClick={handleClick} className={styles.article__btn}>Enter on chat!</button>
  </article>
  )
}
