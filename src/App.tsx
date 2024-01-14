import MobileNav from './components/MobileNav'
import useScreenMonitor from './assets/hooks/useScreenMonitor'
import Nav from './components/Nav'
import Header from './components/Header'
import Main from './components/Main'
import Hero from './components/Hero'
import Specials from './components/Specials'
import Testimonials from './components/Testimonials'

export default function App() {
  const mobile = useScreenMonitor()

  return (
    <>
      <Header>{mobile ? <MobileNav /> : <Nav />}</Header>
      <Main>
        <Hero />
        <Specials />
        <Testimonials />
      </Main>
    </>
  )
}
