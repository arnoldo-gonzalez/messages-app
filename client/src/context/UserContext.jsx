import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext()

export function useUser() {
  return useContext(UserContext)
}

export function UserProvider({children}) {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")))
  const validUser = user && user.username && user.token && typeof(user.username) === "string" && user.username.length > 3 && typeof(user.token) === "string"
  const navigate = useNavigate()
  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const handleLogin = (user, nextUrl) => {
    setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
    navigate(nextUrl, {replace: true})
  }

  if (!validUser && user) handleLogout()

  const data = {user: validUser ? user : null, handleLogout, handleLogin}

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}
