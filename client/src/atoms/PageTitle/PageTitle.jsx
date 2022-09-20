import styles from "./PageTitle.module.css"

export default function PageTitle({small = false}) {
  return (
    <h2 className={`${styles.h1} ${small ? styles.small : ""}`}>Messages <b>Red</b><b>Wri</b>ters</h2>
  )
}