import { useEffect, useState } from "react";

export default function useFetch(callback) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    callback()
      .then(result => {
        if (result) {
          setData(result)
          setIsLoading(false)
        } else {
          setData(false)
          setIsLoading(false)
        }
      })
  }, [])

  return {data, isLoading, setData}
}