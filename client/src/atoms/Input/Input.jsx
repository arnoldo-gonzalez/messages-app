import styles from "./Input.module.css"

export default function Input({label, id, ...props}) {
  return (
    <>
    {label && <label htmlFor={id} className={styles.label}>{label}</label>}
    <input id={id} className={styles.input} {...props} />
    </>
  )
}