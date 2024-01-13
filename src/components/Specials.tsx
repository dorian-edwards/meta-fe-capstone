import { MenuItem } from '../dataTypes'
import ButtonPrimary from './ButtonPrimary'
import MenuItemCard from './MenuItemCard'

const specials: MenuItem[] = [
  {
    imageUrl: './images/greek-salad.jpg',
    imageDescription: 'Greek salad',
    name: 'Greek Salad',
    price: '12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunch garlic and rosemary croutons.',
  },
  {
    imageUrl: './images/bruschetta.png',
    imageDescription: 'Bruschetta',
    name: 'Bruschetta',
    price: '5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    imageUrl: './images/lemon-dessert.jpg',
    imageDescription: 'Slice of layered lemon dessert',
    name: 'Lemon Dessert',
    price: '5.00',
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
]

export default function Specials() {
  return (
    <section
      id='specials'
      className='pt-[6.2rem] pb-[9.2rem] min-[560px]:pt-[16rem]'
    >
      <div className='content-container'>
        <div className='specials-heading pb-[5rem]'>
          <h2 className='specials-mobile text-title text-center'>Specials</h2>
          <div className='specials flex justify-between max-[559px]:hidden'>
            <h2 className='text-title'>This week's specials!</h2>
            <ButtonPrimary>Online Menu</ButtonPrimary>
          </div>
        </div>
        <ul className='specials-list flex flex-col gap-y-[4rem] gap-x-[2rem]'>
          {specials.map((special, index) => (
            <li key={index} className='basis-1/3'>
              <MenuItemCard
                imageUrl={special.imageUrl}
                imageDescription={special.imageDescription}
                name={special.name}
                price={special.price}
                description={special.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
