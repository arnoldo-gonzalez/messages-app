import styles from "./SearchForm.module.css";
import Input from "../../atoms/Input/Input";

export default function SearchForm ({search, setSearch, ...props}) {
  const handleChange = ({target: {value}}) => setSearch(value)
  const handleSubmit = (e) => e.preventDefault()

  return (
  <form role="search" {...props} onSubmit={handleSubmit} className={styles.form}>
    <Input type="search" value={search} name="search" id="search" aria-label="Search an chat by its title" onChange={handleChange} label="Search a chat by its title" placeholder="Some chat title..." />
  </form>
  )
}
