export default function logAnUser(userData, url) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(res => res.ok ? res.json() : Promise.reject())
    .then( ({ok, user, error}) => {
      if (ok) {
        localStorage.setItem("user", JSON.stringify(user))
        return {error: null, username: user.username}
      }
      else return {error: true, body: error}
    })
    .catch( () => {
      return false
    })
}
