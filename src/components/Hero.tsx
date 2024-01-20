import ButtonPrimary from "./ButtonPrimary"
import { Link } from "react-router-dom"

export default function Hero() {
  const description =
    "We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist."
  return (
    <section id="hero" className="py-[3.5rem] bg-primary-green">
      <div className="content-container flex justify-between">
        <div className="hero-text-wrapper min-[560px]:basis-1/2 w-full shrink-0">
          <h1 className="text-title text-primary-yellow mb-[0.75rem]">
            Little Lemon
          </h1>
          <h3 className="text-subtitle text-white mb-[2rem]">Baltimore</h3>
          <p className="text-lead text-white min-[560px]:max-w-[25rem] w-full max-w-[75%] mb-[2rem]">
            {description}
          </p>
          <Link to="/booking">
            <ButtonPrimary>Reserve a table</ButtonPrimary>
          </Link>
        </div>
        <div className="hero-image-wrapper w-full relative min-[940px]:right-[-4rem] max-[559px]:hidden">
          <div className="img-wrapper absolute max-h-[450px] overflow-hidden rounded-3xl">
            <img
              className=""
              src="/images/restauranfood.jpg"
              alt="tray of food being held by a person in an apron"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
