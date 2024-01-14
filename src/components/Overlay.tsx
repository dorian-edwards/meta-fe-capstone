import { useEffect } from 'react'

export default function Overlay({
  active,
  closeOverlay,
}: {
  active: boolean
  closeOverlay: () => void
}) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).getAttribute('id') === 'overlay') {
        closeOverlay()
      }
    }

    if (active) {
      document.body.classList.add('lock')
      document.addEventListener('click', handleClick)
    } else {
      document.body.classList.remove('lock')
    }

    return () => document.removeEventListener('click', handleClick)
  }, [active, closeOverlay])

  return (
    <div
      id='overlay'
      className={`fixed overlay w-full h-[calc(100vh-75.1333px)] top-[75.1333px] bg-[rgba(0,0,0,0.5)] opacity-0 transition-[opacity] duration-500 ${
        active ? 'opacity-100' : ''
      } z-[99]`}
    />
  )
}
