import Scooter from '../assets/icons/Scooter'
import { MenuItem } from '../dataTypes'

export default function MenuItemCard({
  imageUrl,
  imageDescription,
  name,
  price,
  description,
}: MenuItem) {
  return (
    <div
      className='menu-item-card basis-1/3 grid grid-rows-[181px,auto,auto] bg-highlight-light max-w-[35rem] m-auto'
      role='presentation'
    >
      <div className='img-wrapper rounded-t-lg max-h-[18.6rem] overflow-hidden'>
        <img src={imageUrl} alt={imageDescription} className='w-full' />
      </div>
      <div className='details-wrapper p-[2rem] pb-[3rem] rounded-b-md grid '>
        <div className='menu-item-card-heading flex justify-between'>
          <span className='text-card-title'>{name}</span>
          <span className='text-highlight text-dark-yellow'>${price}</span>
        </div>
        <p className='description mb-[3rem] min-[750px]:w-full min-[940px]:h-[14.4rem] overflow-y-scroll'>
          {description}
        </p>
        <button
          type='button'
          className='order-delivery-btn flex gap-x-[0.75rem] bg-primary-green text-highlight-light py-[0.5rem] px-[1rem] rounded-md active:scale-[1.1] transition-transform duration-100 max-w-[175px]'
        >
          Order Delivery
          <Scooter />
        </button>
      </div>
    </div>
  )
}
