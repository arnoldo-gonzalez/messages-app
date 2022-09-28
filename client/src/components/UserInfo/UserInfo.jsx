import styles from "./UserInfo.module.css"
import { useUser } from "../../context/UserContext";

export default function UserInfo() {
  const {user: {username, email}} = useUser()
  
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>UserInfo</h2>
      <section className={styles.section}>
        <article className={styles.section__article}>
          <h3 className={styles.section__h3}>Username:</h3>
          <p className={styles.section__p}>{username}</p>
        </article>
        <article className={styles.section__article}>
          <h3 className={styles.section__h3}>Email:</h3>
          <p className={styles.section__p}>{email}</p>
        </article>
        <article className={styles.section__article}>
          <h3 className={styles.section__h3}>Password:</h3>
          <p className={styles.section__p}>*************</p>
        </article>
      </section>
    </div>
  )
}
