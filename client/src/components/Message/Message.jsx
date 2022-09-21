import styles from "./Message.module.css";
import DateOfMessage from "../../atoms/DateOfMessage/DateOfMessage"

export default function Message({prevDate, setPrevDate, message: {body, user, date}, other}) {
  const sendTime = new Date(date)
  const [year, month, day, weekDay, hour, minute] = [sendTime.getFullYear(), sendTime.getMonth(), sendTime.getDate(), sendTime.getDay(), sendTime.getHours(), sendTime.getMinutes()]

  const calendary = {year, month, day, weekDay}
  const isDifferentToPrev = Object.entries(prevDate).some( ([key, value]) => value !== calendary[key])

  setPrevDate(calendary)

  return (
    <>
    { isDifferentToPrev && (
      <DateOfMessage day={day} month={month} weekDay={weekDay} year={year}/>
    )}
    <article className={`${styles.message} ${other ? styles.left : styles.rigth}`}>
      {other && <h5 className={styles.message__h5}>{user.username}</h5>}
      <p className={styles.message__p}>{body}</p>
      <time className={styles.message__time} dateTime={`${year}-${month}-${day} ${hour}:${minute}`}>{hour}:{minute}</time>
    </article>
    </>
  )
}
