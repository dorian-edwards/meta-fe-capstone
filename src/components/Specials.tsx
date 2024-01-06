import ButtonPrimary from './ButtonPrimary'

export default function Specials() {
  return (
    <section
      id='specials'
      className='pt-[6.2rem] pb-[9.2rem] min-[560px]:pt-[12rem]'
    >
      <div className='content-container'>
        <h2 className='specials-mobile text-title text-center'>Specials</h2>
        <div className='specials flex justify-between max-[559px]:hidden'>
          <h2 className='text-title'>This week's specials!</h2>
          <ButtonPrimary>Online Menu</ButtonPrimary>
        </div>
      </div>
    </section>
  )
}

/* Planning
mobile specials centered
desktop: heading banner with specials (longer text) and order button
*/
