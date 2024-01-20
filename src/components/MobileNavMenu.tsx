import NavItems from "./NavItems"

export default function MobileNavMenu({
  active,
  closeOverlay,
}: {
  active: boolean
  closeOverlay: () => void
}) {
  return (
    <nav
      className={`mobile-nav-menu absolute top-[6rem] w-full z-[100] bg-[#fff] ${
        active ? "h-[18.2rem]" : "h-0"
      } overflow-hidden transition-[height] duration-500`}
    >
      <ul className="navigation-menu text-center">
        <NavItems closeOverlay={closeOverlay} />
      </ul>
    </nav>
  )
}
