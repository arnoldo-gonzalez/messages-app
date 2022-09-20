import { Outlet } from "react-router-dom";
import { useAlerts } from "../context/AlertsContext";
import { useUser } from "../context/UserContext";
import AuthenticeteRedirect from "./AuthenticateRedrect";

export default function AuthorizedRoutes() {
  const {user} = useUser()
  const {types, handleToast} = useAlerts()
  const validate = user && user.username && user.token 

  if (!validate) handleToast("To go there you must be logged", types.error)

  return (
    <>
    { !validate
    ? <AuthenticeteRedirect to="/sing_in" />
    : <Outlet />
    }
    </>
  )
}