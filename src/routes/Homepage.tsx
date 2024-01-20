import About from "../components/About"
import Hero from "../components/Hero"
import Main from "../components/Main"
import Reviews from "../components/Reviews"
import Specials from "../components/Specials"

export default function Homepage() {
  return (
    <Main>
      <Hero />
      <Specials />
      <Reviews />
      <About />
    </Main>
  )
}
