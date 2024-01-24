import { Link } from "react-router-dom"
import BookingForm from "../components/BookingForm"
import ButtonPrimary from "../components/ButtonPrimary"
import Main from "../components/Main"

export default function Booking() {
  const description =
    "We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist."
  return (
    <Main>
      <section id="hero" className="py-[3.5rem] bg-primary-green">
        <div className="content-container">
          <div className="flex justify-between">
            <div className="hero-text-wrapper min-[560px]:basis-1/2 w-full shrink-0">
              <h1 className="text-title text-primary-yellow mb-[0.75rem]">
                Little Lemon
              </h1>
              <h3 className="text-subtitle text-white mb-[2rem]">Baltimore</h3>
              <p className="text-lead text-white min-[560px]:max-w-[25rem] w-full max-w-[75%] mb-[2rem]">
                {description}
              </p>
              <Link to="/events">
                <ButtonPrimary>Special Events</ButtonPrimary>
              </Link>
            </div>
            <div className="hero-image-wrapper w-full relative min-[940px]:right-[-4rem] max-[559px]:hidden">
              <div className="img-wrapper absolute max-h-[450px] overflow-hidden rounded-3xl">
                <img
                  className=""
                  src="/images/marissa-grootes.jpg"
                  alt="tray of food being held by a person in an apron"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="form-wrapper pt-[6.2rem] pb-[9.2rem] min-[560px]:pt-[16rem]">
        <div className="content-container">
          <h2 className="text-title pb-[5rem]">Reserve a table</h2>
          <BookingForm />
        </div>
      </section>
    </Main>
  )
}
