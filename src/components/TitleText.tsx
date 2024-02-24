import { ReactNode } from 'react'

export default function TitleText({
  children,
  sx,
}: {
  children: ReactNode
  sx?: React.CSSProperties
}) {
  return (
    <h1 className='text-title text-primary-yellow mb-[0.75rem]' style={sx}>
      {children}
    </h1>
  )
}
