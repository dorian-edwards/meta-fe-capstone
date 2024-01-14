export default function Testimonials() {
  return (
    <section className='testimonials py-[10rem] bg-primary-green-faded'>
      <div className='content-container'>
        <h2 className='text-title text-center mb-[6rem]'>Reviews</h2>
        <div className='testimonial-card-wrapper flex flex-wrap justify-center items-center gap-10'>
          <ReviewCard
            rating={'\u2b50\u2b50\u2b50\u2b50'}
            name='Keisha'
            imageUrl='./images/customer1.jpg'
            review='Delicious!'
          />
          <ReviewCard
            rating={'\u2b50\u2b50\u2b50\u2b50'}
            name='Dan'
            imageUrl='./images/customer2.jpg'
            review='Great Service.'
          />
          <ReviewCard
            rating={'\u2b50\u2b50\u2b50\u2b50'}
            name='Ebony'
            imageUrl='./images/customer3.jpg'
            review='My favorite spot'
          />
          <ReviewCard
            rating={'\u2b50\u2b50\u2b50\u2b50'}
            name='Jerome'
            imageUrl='./images/customer4.jpg'
            review='Wonderful staff!'
          />
        </div>
      </div>
    </section>
  )
}

export interface ReviewCardProps {
  rating: string
  name: string
  imageUrl: string
  review?: string
}

export function ReviewCard({
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
