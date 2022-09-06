import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AuthenticeteRedirect() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/", {replace: true})
  }, [])

  return (null)
}