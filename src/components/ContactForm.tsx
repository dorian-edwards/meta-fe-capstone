import TextField from '@mui/material/TextField/TextField'
import { FormData } from '../dataTypes'
import { ContactErrors } from './BookingForm'
import { validateEmail, validatePhoneNumber } from '../contexts/stateUtils'

export default function ContactForm({
  formData,
  updateForm,
  contactErrors,
  setContactErrors,
}: {
  formData: FormData
  updateForm: (section: string, property: string, value: string) => void
  contactErrors: ContactErrors
  setContactErrors: React.Dispatch<React.SetStateAction<ContactErrors>>
}) {
  const formInputStyles = {
    fontSize: '1.6rem',
    marginBottom: '3.6rem',
    '.MuiTextField-root': {
      fontSize: '1.6rem',
    },
    '.MuiInputBase-input': {
      fontSize: '1.6rem',
      backgroundColor: '#EDEFEE',
      borderRadius: '4px',
    },
    '.MuiInputLabel-root': {
      fontSize: '1.6rem',
      color: '#777',
    },
    '.MuiFormHelperText-root': {
      fontSize: '1.2rem',
      position: 'absolute',
      bottom: '-2rem',
    },
    legend: {
      display: 'none !important',
    },
    '.MuiOutlinedInput-notchedOutline': {
      top: 0,
    },
  }

  return (
    <>
      {' '}
      <TextField
        id='first-name'
        label='First name'
        type='text'
        variant='outlined'
        fullWidth
        value={formData.contact.firstName}
        onChange={(e) => {
          setContactErrors({
            ...contactErrors,
            firstName: {
              error: false,
              message: '',
            },
          })
          updateForm('contact', 'firstName', e.target.value)
        }}
        sx={formInputStyles}
        required
        onBlur={() => {
          const { firstName } = formData.contact
          if (firstName.trim() === '') {
            setContactErrors({
              ...contactErrors,
              firstName: {
                error: true,
                message: 'First name required',
              },
            })
          }
        }}
        error={contactErrors.firstName.error}
        helperText={contactErrors.firstName.message}
      />
      <TextField
        id='last-name'
        label='Last name'
        type='text'
        variant='outlined'
        fullWidth
        value={formData.contact.lastName}
        onChange={(e) => {
          setContactErrors({
            ...contactErrors,
            lastName: {
              error: false,
              message: '',
            },
          })
          updateForm('contact', 'lastName', e.target.value)
        }}
        sx={formInputStyles}
        required
        onBlur={() => {
          const { lastName } = formData.contact
          if (lastName.trim() === '') {
            setContactErrors({
              ...contactErrors,
              lastName: {
                error: true,
                message: 'Last name required',
              },
            })
          }
        }}
        error={contactErrors.lastName.error}
        helperText={contactErrors.lastName.message}
      />
      <TextField
        id='email'
        label='Email'
        type='email'
        variant='outlined'
        fullWidth
        value={formData.contact.email}
        onChange={(e) => {
          setContactErrors({
            ...contactErrors,
            email: {
              error: false,
              message: '',
            },
          })
          updateForm('contact', 'email', e.target.value)
        }}
        sx={formInputStyles}
        required
        onBlur={() => {
          const { email } = formData.contact
          if (email.trim() === '') {
            setContactErrors({
              ...contactErrors,
              email: {
                error: true,
                message: 'Valid email required',
              },
            })
            return
          }
          try {
            validateEmail(email)
          } catch (e) {
            setContactErrors({
              ...contactErrors,
              email: {
                error: true,
                message: 'Invalid email address',
              },
            })
          }
        }}
        error={contactErrors.email.error}
        helperText={contactErrors.email.message}
      />
      <TextField
        id='phone'
        label='Phone'
        type='tel'
        variant='outlined'
        fullWidth
        value={formData.contact.phone}
        onChange={(e) => {
          updateForm('contact', 'telephone', e.target.value)
          try {
            validatePhoneNumber(e.target.value)
            setContactErrors({
              ...contactErrors,
              telephone: {
                error: false,
                message: '',
              },
            })
          } catch {
            setContactErrors({
              ...contactErrors,
              telephone: {
                error: true,
                message: 'Invalid telephone number',
              },
            })
            return
          }
        }}
        sx={{ ...formInputStyles, marginBottom: '5.9rem' }}
        required
        onBlur={() => {
          const { telephone } = formData.contact
          if (telephone.trim() === '') {
            setContactErrors({
              ...contactErrors,
              telephone: {
                error: true,
                message: 'Telephone number required',
              },
            })
          }
        }}
        error={contactErrors.telephone.error}
        helperText={contactErrors.telephone.message}
      />
    </>
  )
}
