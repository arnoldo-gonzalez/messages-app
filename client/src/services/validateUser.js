import {BASE_URL} from "../data/vars"

export function validateUser({user, handleLogout, handleError}) {
  return fetch(`${BASE_URL}/api/validateToken`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${user.token}`
    },
  })
    .then( (res) => res.ok ? res.json() : Promise.reject(res.status))
    .then( json => {
      return json.ok || handleLogout()
    })
    .catch( (code) => {
      if (code === 401) return handleLogout()
      handleError()
    })
}