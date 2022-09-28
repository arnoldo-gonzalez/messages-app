import { useNavigate, Link } from "react-router-dom";
import logAnUser from "../../services/logAnUser";
import styles from "./UsersLogs.module.css";
import AuthenticeteRedirect from "../../components/AuthenticateRedrect";
import LogForm from "../../components/LogForm/LogForm";
import { SING_IN, SING_UP } from "../../data/formsData";
import PageTitle from "../../atoms/PageTitle/PageTitle";
import { allContent } from "../../data/UsersLogs";
import Loading from "../../atoms/Loading/Loading";
import { useAlerts } from "../../context/AlertsContext";
import { useUser } from "../../context/UserContext";
import { useState, useEffect } from "react";

export default function UsersLogs({singIn}) {
  const {types, handleToast} = useAlerts()
  const {user, handleLogin} = useUser()
  const contents = singIn ? allContent.SING_IN : allContent.SING_UP
  const url = contents.urlToFetch
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = data => {
    setIsLoading(true)

    logAnUser(data, url)
      .then( result => {
        setIsLoading(false)
        if (!result) return handleToast("Some thing fail, check your network connection and try again", types.error)

        if (result.error) return handleToast(result.body, types.error)
        handleLogin(result, "/log_on_chat")

        handleToast(`Hello ${result.username}, You have sucessfully logged in`, types.success)
      })
  }

  useEffect(() => {
    document.title = contents.title
  }, [singIn])

  return (
    <>
    { user ? <AuthenticeteRedirect to="/log_on_chat" />
    : ( 
    <main className={styles.main}>
      <PageTitle />
      <div className={styles["container-form"]}>
        {isLoading && <Loading text={true} />}
        <h2 className={styles["container-form__h2"]}>{contents.title}</h2>
        <LogForm content={contents} handleSubmit={handleSubmit} inputs={singIn ? SING_IN : SING_UP} />
        <Link className={styles["container-form__link"]} to={`${singIn ? "/sing_up" : "/sing_in" }`}>{contents.link}</Link>
      </div>
    </main>
    )}
    </>
  )
}
