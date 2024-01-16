import ReviewCard from './ReviewCard'

export default function Reviews() {
  return (
    <section className='reviews py-[10rem] bg-primary-green'>
      <div className='content-container'>
        <h2 className='text-title text-center mb-[6rem] text-primary-yellow'>
          Reviews
        </h2>
        <div className='review-card-wrapper flex flex-wrap justify-center items-center gap-10'>
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
