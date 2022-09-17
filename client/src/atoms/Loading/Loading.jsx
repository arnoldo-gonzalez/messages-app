import styles from "./Loading.module.css"

export default function Loading({text = false}) {
  return (
    <div className={styles.container}>
      <div className={styles.loading}></div>
      {text && (
        <p className={styles.loading__p}>Loading</p>
      )}
    </div>
  )
}