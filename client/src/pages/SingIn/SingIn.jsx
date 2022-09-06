import { useNavigate } from "react-router-dom"
import logAnUser from "../../services/logAnUser"
import styles from "./SingIn.module.css"

export default function SingIn() {
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))

    if (!data.email || !data.password) return console.log("error on data")

    logAnUser(data)
      .then( result => {
        if (!result) return console.log("error on result")

        if (result.error) return console.log("error on error")

        navigate("/chat", {replace: false})
      })
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.main__h1}>Messages <b>Red</b><b>Wri</b>ters</h1>
      <h2 className={styles.main__h2}>We connect the world reading and sending messages</h2>
      <div className={styles["container-form"]}>
        <h2>Sing in on your account</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="email" className={styles.form__label}>Enter yout email</label>
          <input id="email" required={true} className={styles.form__email} type="email" name="email" placeholder="For example pepito123@algo.com" />
          <label htmlFor="password" className={styles.form__label}>Enter yout password</label>
          <input id="password" required={true} className={styles.form__password} type="password" name="password" placeholder="******" />
          <input type="submit" className={styles.form__submit} value="Sing in" />
        </form>
      </div>
    </main>
  )
}