import { createContext, useEffect, useContext } from "react";
import io from "socket.io-client";
import AuthenticeteRedirect from "../components/AuthenticateRedrect";
import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";
import { useAlerts } from "./AlertsContext";
import { CreateHandleDissconnect, CreateHandleError } from "../helpers/socketHandlers";
import {BASE_URL} from "../data/vars"

const SocketContext = createContext()

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider ({children}) {
  const {user: {token}, handleLogout} = useUser();
  const {chatId} = useParams();
  const navigate = useNavigate();
  const {types, handleToast} = useAlerts();
  const disconnectSocket = () => socket.disconnect();
  
  const socket = io(`${BASE_URL}/`, {
    auth: { token, chatId }
  })

  const data = {socket, chatId}

  useEffect(() => {
    const handleConnectionError = CreateHandleError({types, handleToast, navigate, handleLogout, socket})
    const handleDisconnect = CreateHandleDissconnect({types, handleToast, navigate})

    socket.on("connect_error", handleConnectionError)
    socket.on("disconnect", handleDisconnect)

    return () => {
      if (socket.connected) disconnectSocket();
      else socket.on("connect", disconnectSocket);

      socket.off("connect_error", handleConnectionError);
      socket.off("disconnect", handleDisconnect);
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
