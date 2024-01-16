export default function About() {
  return (
    <section className='about py-[10rem]'>
      <div className='content-container flex gap-x-[5rem]'>
        <div className='about-description w-[95%] min-[840px]:basis-1/2'>
          <h2 className='text-title text-primary-yellow mb-[0.75rem]'>
            Little Lemon
          </h2>
          <h3 className='text-subtitle text-highlight-dark mb-[2rem]'>
            Baltimore
          </h3>
          <div className='img-wrapper w-[27.6rem] h-[33.8rem] mr-[2.5rem] bg-[url(./images/restaurant-chef-B.jpg)] bg-cover bg-no-repeat bg-center float-left hidden min-[500px]:block min-[840px]:hidden' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
            earum autem dolorem, dignissimos tenetur id quis repudiandae
            molestiae aperiam expedita numquam cum vitae placeat rerum officiis
            accusamus perferendis corporis iusto. Delectus, dolorem iusto magnam
            doloribus, iure, vero facere quibusdam sed enim maxime corrupti?
            Tempore eveniet repudiandae voluptatibus esse, repellendus
            aspernatur!
          </p>
        </div>
        <div className='about-images basis-1/2 min-[840px]:flex justify-center items-center hidden'>
          <div className='img-frame w-[44.4rem] h-[44.4rem] relative'>
            <div className='img-wrapper w-[27.6rem] h-[33.8rem] absolute top-0 right-0 bg-[url(./images/marissa-grootes.jpg)] bg-cover bg-no-repeat bg-center' />
            <div className='img-wrapper w-[27.6rem] h-[33.8rem] absolute bottom-0 left-0  bg-[url(./images/MNAB.jpg)] bg-cover bg-no-repeat bg-center' />
          </div>
        </div>
      </div>
    </section>
  )
}
