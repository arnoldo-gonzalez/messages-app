import styles from "./Message.module.css";
import DateOfMessage from "../../atoms/DateOfMessage/DateOfMessage";
import parseTime from "../../helpers/parseTime.js"

export default function Message({prevDate, setPrevDate, message: {body, user, date, id}, other}) {
  const sendTime = new Date(date)
  const [year, month, day, weekDay, hour, minute] = [sendTime.getFullYear(), sendTime.getMonth(), sendTime.getDate(), sendTime.getDay(), sendTime.getHours(), sendTime.getMinutes()]

  const calendary = {year, month, day, weekDay}
  const isDifferentToPrev = Object.entries(prevDate).some( ([key, value]) => value !== calendary[key])
  const bodyArr = body.split("\n").reduce((acc, e, i) => (acc.push(e), acc.push(<br key={i + "-key-for-" + acc.at(-1)}/>), acc), []).slice(0, -1)

  setPrevDate(calendary)

  return (
    <>
    { isDifferentToPrev && (
      <DateOfMessage day={day} month={month} weekDay={weekDay} year={year}/>
    )}
    <article className={`${styles.message} ${other ? styles.left : styles.rigth}`}>
      {other && <h5 className={styles.message__h5}>{user.username}</h5>}
      <p className={styles.message__p}>{bodyArr}</p>
      <time className={styles.message__time} dateTime={`${year}-${month}-${day} ${hour}:${minute}`}>{parseTime(`${hour}:${minute}`)}</time>
    </article>
    </>
  )
}
