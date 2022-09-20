import { nav__link, active } from "./NavLink.module.css";
import { NavLink as VanillaNavLink } from "react-router-dom";

export default function NavLink({children, to, ...props}) {
  const handleClasses = ({isActive}) => {
    return isActive ? nav__link + " " + active : nav__link
  }

  return (
    <VanillaNavLink className={handleClasses} to={to} {...props}>
      {children}
    </VanillaNavLink>
  )
}