export default function createChat (token, data) {
  return fetch("/api/createChat", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
    .then(res => res.ok ? res.json() : Promise.reject(res.status))
    .then( ({error, chatId}) => {
      if (error) return {error:true, body: error}

      return {chatId}
    })
    .catch(code => {
      if (code === 401) return {error: true, code}
    })
}
