import style from "./Message.module.css"

export default function Message({message: {body, user}, other}) {
  const parsedBody = parseLength(body.split(" "))

  return (
    <article className={`${style.message} ${other ? style.left : style.rigth}`}>
      <h5 className={style.message__h5}>{other ? user.username : "You"}</h5>
      <p className={style.message__p}>{body}</p>
    </article>
  )
}

function parseLength (words, i) {
  return []
}
