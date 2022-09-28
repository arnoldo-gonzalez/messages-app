import styles from "./FeatureCard.module.css"

export default function FeatureCard({children, title, icon}) {
  return (
    <article className={styles.article}>
      <div className={styles["article__container-title"]}>
        {icon}
        <h3 className={styles.article__h3}>{title}</h3>
      </div>
      <p className={styles.article__p}>
        {children}
      </p>
    </article>
  )
}