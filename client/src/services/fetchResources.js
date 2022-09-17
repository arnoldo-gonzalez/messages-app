export default function fetchResources(url, token) {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .then(json => json)
    .catch(code => {
      console.log(code)
      return {error: true, code}
    })
}
