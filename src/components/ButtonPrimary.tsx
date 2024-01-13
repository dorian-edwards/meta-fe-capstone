import { ReactNode } from 'react'

export default function ButtonPrimary({ children }: { children: ReactNode }) {
  return (
    <button className='text-lead bg-primary-yellow rounded-3xl py-[1rem] px-[2rem]'>
      {children}
    </button>
  )
}
