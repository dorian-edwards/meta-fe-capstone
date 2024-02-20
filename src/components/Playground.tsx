import { TextField } from '@mui/material'
import { useState } from 'react'
import ButtonPrimary from './ButtonPrimary'

const initialData: FormData = {
  firstName: {
    value: '',
    errorMessage: '',
  },
  lastName: {
    value: '',
    errorMessage: '',
  },
  email: {
    value: '',
    errorMessage: '',
    validator: function (s: string): boolean {
      throw new Error('Function not implemented.')
    },
  },
  phone: {
    value: '',
    errorMessage: '',
    validator: validatePhoneNumber,
  },
}

export interface InputProps {
  id: string
  label: string
  val: string
  setVal: (e: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage: string
  required?: boolean
  autofocus?: boolean
  type?: React.HTMLInputTypeAttribute | undefined
  sx?: React.CSSProperties | undefined
}

export interface FormData {
  firstName: {
    value: string
    errorMessage: string
  }
  lastName: {
    value: string
    errorMessage: string
  }
  email: {
    value: string
    errorMessage: string
    validator: (s: string) => string | boolean
  }
  phone: {
    value: string
    errorMessage: string
    validator: (s: string) => string | boolean
  }
}

export function Input({
  id,
  label,
  val,
  setVal,
  errorMessage,
  required,
  autofocus,
  type,
  sx,
}: InputProps) {
  const [focused, setFocused] = useState<boolean>(false)
  const [error, setError] = useState({ error: false, message: '' })

  const handleFocus = () => {
    setFocused(true)
    setError({ error: false, message: '' })
  }
  return (
    <div className='input-wrapper relative mx-auto w-full' style={sx}>
      <input
        type={type || 'text'}
        id={id}
        className={`${
          focused && error.error ? 'border-[#EB0014]' : ''
        } border border-[#555] rounded-[0.4rem] pl-[1rem] py-[0.8rem] peer w-full focus-within:outline-primary-green`}
        value={val}
        onChange={(e) => setVal(e)}
        autoFocus={autofocus}
        onFocus={handleFocus}
        onBlur={(e) => {
          if (e.target.value.trim() === '') {
            setError({ error: true, message: errorMessage })
          }
        }}
        onError={(e) => console.log(e)}
      />
      <label
        htmlFor={id}
        className={`absolute text-[#777] pr-[.8rem] pl-[0.6rem] left-[1rem] top-[0.8rem] bg-white peer-focus-within:top-[-1.2rem] peer-focus-within:left-[1.2rem] peer-focus-within:text-primary-green transition-[all] duration-100 ${
          required ? 'after:content-["*"]' : ''
        } ${val.trim() !== '' ? '!left-[1.2rem] !top-[-1.2rem]' : ''} ${
          error.error ? 'text-[#EB0014]' : ''
        }`}
      >
        {label}
      </label>
      <span
        className={`error-message text-[1.2rem] pl-[1.2rem] text-[#EB0014] absolute bottom-[-1rem] left-0 w-full h-4 opacity-0 ${
          error.error ? 'opacity-100' : ''
        } transition-[all] duration-100`}
      >
        {error.message || ' '}
      </span>
    </div>
  )
}

export function validatePhoneNumber(tel: string): string {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

  if (phoneRegex.test(tel)) {
    return tel.replace(phoneRegex, '($1) $2-$3')
  } else {
    throw new Error('Invalid number format')
  }
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  if (emailRegex.test(email)) {
    return true
  } else {
    throw new Error('Invalid email format')
  }
}

export interface FormData2 {
  firstName: string
  lastName: string
  email: string
  phone: string
}

const initialData2: FormData2 = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
}

export default function Playground() {
  const [formData, setFormData] = useState<FormData2>(initialData2)
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section className='contact-form'>
      <div className='content-container py-[25rem]'>
        <h1 className='text-title pb-[5rem]'>Reserve a table</h1>
        <form
          className='w-full grid grid-cols-2 gap-[4rem] auto-rows-auto'
          onSubmit={handleSubmit}
        >
          <TextField
            id='first-name'
            label='First name'
            type='text'
            variant='outlined'
            fullWidth
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            sx={formInputStyles}
            required
          />
          <TextField
            id='last-name'
            label='Last name'
            type='text'
            variant='outlined'
            fullWidth
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            sx={formInputStyles}
          />
          <TextField
            id='email'
            label='Email'
            type='email'
            variant='outlined'
            fullWidth
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            sx={formInputStyles}
          />
          <TextField
            id='phone'
            label='Phone'
            type='tel'
            variant='outlined'
            fullWidth
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            sx={formInputStyles}
          />
          <ButtonPrimary
            sx={{
              width: '90%',
              gridColumn: '1/3',
              justifySelf: 'center',
            }}
          >
            Submit
          </ButtonPrimary>
        </form>
      </div>
    </section>
  )
}

const formInputStyles = {
  fontSize: '1.6rem',
  '..MuiTextField-root': {
    fontSize: '1.6rem',
  },
  '.MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
    top: 0,
    left: 0,
  },
  '.MuiFormLabel-root.MuiInputLabel-root.MuiFormLabel-filled': {
    top: 0,
    left: 0,
  },
  '.MuiInputBase-input': {
    fontSize: '1.6rem',
  },
  '.MuiInputLabel-root': {
    fontSize: '1.6rem',
  },
}
