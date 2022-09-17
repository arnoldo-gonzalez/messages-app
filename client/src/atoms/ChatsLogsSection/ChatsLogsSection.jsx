import styles from "./ChatsLogsSection.module.css"

export default function ChatsLogsSection ({children, list = false}) {
  return (
    <section className={`${styles.section} ${list ? styles.list : ""}`}>
      {children}
    </section>
  )
}
