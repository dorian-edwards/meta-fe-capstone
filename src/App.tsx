import MobileNav from './components/MobileNav'
import useScreenMonitor from './assets/hooks/useScreenMonitor'
import Nav from './components/Nav'
import Header from './components/Header'

export default function App() {
  const mobile = useScreenMonitor()

  return (
    <>
      <Header>{mobile ? <MobileNav /> : <Nav />}</Header>
    </>
  )
}
