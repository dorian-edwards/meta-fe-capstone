import { Link } from "react-router-dom"
import NavLogo from "../assets/icons/NavLogo"
import NavItems from "./NavItems"

export default function Nav() {
  return (
    <nav className="flex justify-between items-center content-container py-[2rem]">
      <Link to="/">
        <NavLogo />
      </Link>
      <ul className="navigation-menu flex gap-x-[2.6rem]">
        <NavItems />
      </ul>
    </nav>
  )
}
