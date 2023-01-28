import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAlerts } from "./AlertsContext"
import {validateUser} from "../services/validateUser"

const UserContext = createContext()

export function useUser() {
  return useContext(UserContext)
}

export function UserProvider({children}) {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")))
  const validUser = user && user.username && user.token && typeof(user.username) === "string" && user.username.length > 3 && typeof(user.token) === "string"
  const navigate = useNavigate()
  const {types, handleToast} = useAlerts()

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const handleLogin = (user, nextUrl) => {
    setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
    navigate(nextUrl, {replace: true})
  }

  const handleError = () => {
    handleToast("Some thing fail, check your connection and try again", types.error)
    handleLogout()
  }

  if (!validUser && user) handleLogout()

  const data = {user: validUser ? user : null, handleLogout, handleLogin}

  useEffect(() => {
    if (!user || !validUser) return

    validateUser({user, handleLogout, handleError})

    const validateInterval = setInterval(() => validateUser({user, handleLogout, handleError}), 1000 * 60 * 60)

    return () => clearInterval(validateInterval)
  }, [user])

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}
