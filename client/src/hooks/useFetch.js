import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { useAlerts } from "../context/AlertsContext";
import fetchResources from "../services/fetchResources";

export default function useFetch(url, token, description) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {handleLogout} = useUser()
  const {types, handleToast} = useAlerts()
  
  useEffect(() => {
    fetchResources(url, token)
      .then(result => {
        setIsLoading(false)
        if (!result?.error) return setData(result)

        if (result.code === 401) return handleLogout()
        return handleToast("Some thing was wrong, check your connection and reload the page" + (description ? ` to get the ${description}` : ""), types.error)
      })
  }, [])

  return {data, isLoading, setData}
}
