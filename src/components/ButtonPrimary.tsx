import { ButtonPrimaryProps } from '../dataTypes'

export default function ButtonPrimary({
  children,
  type,
  sx,
  disabled,
}: ButtonPrimaryProps) {
  return (
    <button
      className='text-lead bg-primary-yellow rounded-3xl py-[1rem] px-[2rem] disabled:bg-highlight-light disabled:text-[#666]'
      type={type || 'button'}
      style={sx}
      disabled={disabled || false}
    >
      {children}
    </button>
  )
}
