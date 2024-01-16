import HamburgerIcon from '../assets/icons/HamburgerIcon'
import NavLogo from '../assets/icons/NavLogo'
import { useState } from 'react'
import MobileNavMenu from './MobileNavMenu'
import Overlay from './Overlay'

export default function MobileNav() {
  const [menuActive, setMenuActive] = useState<boolean>(false)

  return (
    <>
      <div className='mobile-nav-container h-[6rem] flex justify-between items-center px-[2.4rem]'>
        <NavLogo />
        <button
          onClick={() => setMenuActive((prevState) => !prevState)}
          aria-label='menu'
        >
          <HamburgerIcon />
        </button>
      </div>
      <MobileNavMenu active={menuActive} />
      <Overlay active={menuActive} closeOverlay={() => setMenuActive(false)} />
    </>
  )
}
