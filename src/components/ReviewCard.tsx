import { ReviewCardProps } from '../dataTypes'

export default function ReviewCard({
  rating,
  name,
  imageUrl,
  review,
}: ReviewCardProps) {
  return (
    <div className='review-card bg-secondary-light-faded max-w-[20rem] min-w-[18rem] px-[2rem] py-[2rem] rounded-md'>
      <h3 className='rating mb-6'>{rating}</h3>
      <div className='review-info flex gap-6 mb-[1rem]'>
        <div className='img-wrapper'>
          <img src={imageUrl} alt='' className='w-[75px]' />
        </div>
        <div className='text-wrapper flex items-center justify-center'>
          <p className='review-name'>{name}</p>
        </div>
      </div>
      <p className='review-text'>{review}</p>
    </div>
  )
}
