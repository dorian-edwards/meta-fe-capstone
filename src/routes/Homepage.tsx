import About from '../components/About'
import Hero from '../components/Hero'
import Reviews from '../components/Reviews'
import Specials from '../components/Specials'

export default function Homepage() {
  const imgAlt =
    'staff member holding a black surface displaying a dish consisting of four oblong pieces of food'

  return (
    <>
      <Hero
        id='hero-home'
        link='/booking'
        buttonText='Reserve a Table'
        imgUrl='./images/restaurantfood.jpg'
        imgAlt={imgAlt}
      />
      <Specials />
      <Reviews />
      <About />
    </>
  )
}
