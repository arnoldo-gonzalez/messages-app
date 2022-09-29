import { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";

const AlertsContext = createContext()

export function useAlerts() {
  return useContext(AlertsContext)
}

export function AlertsProvider({children}) {
  const handleToast = (text, type) => toast[type](text)

  const types = {
    info: "info",
    success: "success",
    warn: "warn",
    error: "error"
  }

  const data = {types, handleToast}

  return (
    <AlertsContext.Provider value={data}>
      {children}
      <ToastContainer autoClose={30000} />
    </AlertsContext.Provider>
  )
}
