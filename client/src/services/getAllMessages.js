export default function getMessagesOfAnChat() {
  return fetch("http://192.168.1.119:3000/api/getMessagesOfAnChat")
    .then(res => res.ok ? res.json() : Promise.reject())
    .then(json => json)
    .catch(err => {
      console.log(err)
      return false
    })
}