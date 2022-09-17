import styles from "./User.module.css"

export default function User({name}) {
  return (
    <article className={styles.user}>
      <h4 className={styles.user__h4}>{name}</h4>
      <div className={`${styles.user__status} ${styles.green}`}></div>
    </article>
  )
}