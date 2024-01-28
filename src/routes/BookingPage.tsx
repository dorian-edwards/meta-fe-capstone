import BookingForm from '../components/BookingForm'
import Hero from '../components/Hero'

export default function Booking() {
  const imgAlt =
    'We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist.'

  return (
    <section className='booking-page'>
      <Hero
        id='hero-booking'
        link='/events'
        buttonText='Special Events'
        imgUrl='./images/marissa-grootes.jpg'
        imgAlt={imgAlt}
      />
      <BookingForm />
    </section>
  )
}
