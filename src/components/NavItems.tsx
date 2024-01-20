import { Link } from "react-router-dom"

export default function NavItems({
  closeOverlay,
}: {
  closeOverlay?: () => void
}) {
  const handleClose = () => {
    if (closeOverlay) closeOverlay()
  }

  return (
    <>
      <li>
        <Link to={"/"} className="text-lead" onClick={handleClose}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="text-lead" onClick={handleClose}>
          About
        </Link>
      </li>
      <li>
        <Link to="/menu" className="text-lead" onClick={handleClose}>
          Menu
        </Link>
      </li>
      <li>
        <Link to={"/booking"} className="text-lead" onClick={handleClose}>
          Reservations
        </Link>
      </li>
      <li>
        <Link to="/order" className="text-lead" onClick={handleClose}>
          Order Online
        </Link>
      </li>
      <li>
        <Link to="/login" className="text-lead" onClick={handleClose}>
          Login
        </Link>
      </li>
    </>
  )
}
