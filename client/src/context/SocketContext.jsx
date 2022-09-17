import { createContext, useEffect, useContext } from "react";
import io from "socket.io-client";
import AuthenticeteRedirect from "../components/AuthenticateRedrect";
import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";
import { useAlerts } from "./AlertsContext";

const SocketContext = createContext()

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider ({children}) {
  const {user: {token}, handleLogout} = useUser()
  const {chatId} = useParams()
  const navigate = useNavigate()
  const {types, handleToast} = useAlerts()
  const disconnectSocket = () => socket.disconnect()
  
  const socket = io("http://192.168.1.117:3000", {
    auth: {
      token,
      chatId
    }
  })

  socket.on("connect_error", (err) => {
    if (!err?.data) {
      handleToast("The connection to the chat server failed, check your connection and try again", types.error)
      socket.disconnect()
      return navigate("/log_on_chat", {replace: true})
    }

    const { code } = err.data
    if (code === 401) return handleLogout()
    if (code === 404) {
        handleToast("Chat not found, try again with another chat id", types.error)
        return navigate("/log_on_chat", {replace: true})
    }
  })

  socket.on("disconnect", (reason) => {
    if (reason === "io server disconnect") {
        handleToast("You have been disconnected of the chat, try to get into the chat later", types.error)
        return navigate("/log_on_chat", {replace: true})
    }
  })

  const data = {socket, chatId}

  useEffect(() => {
    return () => {      
      if (socket.connected) disconnectSocket();
      else socket.on("connect", disconnectSocket);
    }
  }, [])

  return (
    <>
    {!chatId 
    ? <AuthenticeteRedirect to="log_on_chat" /> 
    : (
      <SocketContext.Provider value={data} >
        {children}
      </SocketContext.Provider>
    )
    }
    </>
  )

}

export default SocketContext
