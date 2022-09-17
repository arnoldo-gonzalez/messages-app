import styles from "./LogForm.module.css";
import Input from "../../atoms/Input/Input";
import { useAlerts } from "../../context/AlertsContext";

export default function LogForm({inputs, handleSubmit: onSubmit, content = {submit: "Sing in"}}) {
  const {types, handleToast} = useAlerts()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))

    if (inputs.re_password && data.password !== data.re_password) return handleToast("The passwords must match", types.error)

    onSubmit(data)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {Object.entries(inputs).map( ([key, data]) => (
        <Input key={key} {...data} require="true" />
      ))}

      <Input id="submit" name="submit" label={false} type="submit" value={content.submit} />
    </form>
  )
}
