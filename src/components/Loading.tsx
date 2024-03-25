import TitleText from './TitleText'

export default function Loading() {
  return (
    <h1 className='h-[100vh] flex justify-center items-center'>
      <TitleText sx={{ color: 'black' }}>Loading</TitleText>
    </h1>
  )
}
