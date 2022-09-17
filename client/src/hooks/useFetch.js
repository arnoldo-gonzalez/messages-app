import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { useAlerts } from "../context/AlertsContext";

export default function useFetch(callback, description) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {handleLogout} = useUser()
  const {types, handleToast} = useAlerts()
  
  useEffect(() => {
    callback()
      .then(result => {
        setIsLoading(false)
        if (!result?.error) return setData(result)

        if (result.code === 401) return handleLogout()
        return handleToast("Some thing was wrong, check your connection and reload the page" + (description ? ` to get the ${description}` : ""), types.error)
      })
  }, [])

  return {data, isLoading, setData}
}
