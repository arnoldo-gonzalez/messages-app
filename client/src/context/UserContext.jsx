import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import AuthenticeteRedirect from "../components/AuthenticateRedrect";

const UserContext = createContext()

export function useUser() {
  return useContext(UserContext)
}

export function UserProvider() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")))
  const validUser = user && user.username && user.token && typeof(user.username) === "string" && user.username.length > 3 && typeof(user.token) === "string"

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  if (!validUser && user) handleLogout()

  const data = {user: validUser ? user : null, handleLogout}

  return (
    <>
      { !validUser ? <AuthenticeteRedirect to="/sing_in" />
      : (
        <UserContext.Provider value={data}>
          <Outlet />
        </UserContext.Provider>
      )}
    </>
  )
}
