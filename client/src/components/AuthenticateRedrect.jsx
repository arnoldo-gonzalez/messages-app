import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AuthenticeteRedirect({to = "/"}) {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(to, {replace: true})
  }, [])

  return (null)
}