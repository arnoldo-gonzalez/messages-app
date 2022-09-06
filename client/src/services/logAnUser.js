export default function logAnUser(userData) {
  return fetch("http://192.168.1.119:3000/api/getOneUser", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(res => res.ok ? res.json() : Promise.reject())
    .then( ({ok, user}) => {
      if (ok) {
        localStorage.setItem("account", JSON.stringify(user))
        return {error: null}
      }
      else return {error: true}
    })
    .catch( err => {
      console.log(err)
      return false
    })
}