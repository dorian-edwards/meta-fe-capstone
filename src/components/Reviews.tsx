import ReviewCard from './ReviewCard'

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
