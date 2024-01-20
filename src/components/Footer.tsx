import { Link } from "react-router-dom"
import Envelope from "../assets/icons/Envelope"
import Phone from "../assets/icons/Phone"
import Location from "../assets/icons/Location"
import Facebook from "../assets/icons/Facebook"
import Instagram from "../assets/icons/Instagram"
import Twitter from "../assets/icons/Twitter"
import Youtube from "../assets/icons/Youtube"

export default function Footer() {
  return (
    <footer className="py-[5rem] bg-primary-green">
      <div className="content-container flex flex-col gap-y-[3rem] justify-center  items-center text-white">
        <Link to="/">
          <div className="image-wrapper max-w-[9.6rem]">
            <img src="./images/logo-white.png" alt="little lemon logo" />
          </div>
        </Link>
        <div className="sitemap text-center">
          <h3 className="mb-[2rem] tracking-[0.5rem]">SITEMAP</h3>
          <nav className="sitemap-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to={"/booking"}>Reservations</Link>
              </li>
              <li>
                <Link to="/order">Order Online</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="contact-us text-center">
          <h3 className="mb-[2rem] tracking-[0.5rem]">CONTACT US</h3>
          <ul>
            <li className="flex gap-[1rem] items-center">
              <Location />
              <address>
                <em>1234 E. Pratt Street, Baltimore, MD 21234</em>
              </address>
            </li>
            <li className="flex gap-[1rem] items-center">
              <Phone />
              <a href="tel:0123456789">
                <em>(012) 345-6789</em>
              </a>
            </li>
            <li className="flex gap-[1rem] items-center">
              <Envelope />
              <a href="mailto: hello@littlelemon.com">
                <em>hello@littlelemon.com</em>
              </a>
            </li>
          </ul>
        </div>
        <div className="social-media text-center">
          <h3 className="mb-[2rem] tracking-[0.5rem]">CONNECT WITH US</h3>
          <ul className="flex gap-x-[1.5rem] justify-center">
            <li>
              <a href="">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="">
                <Youtube />
              </a>
            </li>
            <li>
              <a href="">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="">
                <Twitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
