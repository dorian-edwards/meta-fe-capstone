export default function ReservationImages() {
  return (
    <section className='image-wrapper pt-[10rem] hidden min-[530px]:!block '>
      <div className='content-container flex gap-x-[2rem]'>
        <div className='img-wrapper rounded-[0.8rem] overflow-hidden'>
          <img
            src='./images/dining-table.jpg'
            alt='dining table with dishes served on white plates'
          />
        </div>
        <div className='img-wrapper rounded-[0.8rem] overflow-hidden'>
          <img
            src='./images/pasta.jpg'
            alt='a flour covered hand holding pasta made from scratch'
          />
        </div>
        <div className='img-wrapper rounded-[0.8rem] overflow-hidden'>
          <img
            src='./images/plate.jpg'
            alt='white plate with food centered with a sauce being added'
          />
        </div>
      </div>
    </section>
  )
}
