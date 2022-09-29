import styles from "./FeatureCard.module.css";

export default function FeatureCard({children, title, icon: Icon, id}) {
  return (
    <article className={styles.article}>
      <div className={styles["article__container-title"]}>
        <Icon aria-labelledby={id} />
        <h3 id={id} className={styles.article__h3}>{title}</h3>
      </div>
      <p className={styles.article__p}>
        {children}
      </p>
    </article>
  )
}
