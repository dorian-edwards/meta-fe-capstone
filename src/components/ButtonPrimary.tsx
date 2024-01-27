import { ButtonPrimaryProps } from '../dataTypes'

export default function ButtonPrimary({
  children,
  type,
  sx,
}: ButtonPrimaryProps) {
  return (
    <button
      className='text-lead bg-primary-yellow rounded-3xl py-[1rem] px-[2rem]'
      type={type || 'button'}
      style={sx}
    >
      {children}
    </button>
  )
}
