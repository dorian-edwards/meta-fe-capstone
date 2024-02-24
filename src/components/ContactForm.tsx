import TextField from '@mui/material/TextField/TextField'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import AlarmOnIcon from '@mui/icons-material/AlarmOn'
import { FormData } from '../dataTypes'
import { ContactErrors } from './BookingForm'
import { validateEmail, validatePhoneNumber } from '../contexts/stateUtils'
import { styled } from '@mui/material'
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize'
import dayjs from 'dayjs'
import Cake from '../assets/icons/Cake'
import Glasses from '../assets/icons/Glasses'
import Cap from '../assets/icons/Cap'

const icons: { [key: string]: JSX.Element } = {
  Anniversary: <Glasses fill='#FFF' />,
  Birthday: <Cake fill='#FFF' />,
  Graduation: <Cap fill='#FFF' />,
}

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
    '.MuiFormLabel-root.MuiInputLabel-root.Mui-focused.Mui-error': {
      color: '#d32f2f !important',
    },
    '.MuiFormLabel-root.MuiInputLabel-root.MuiFormLabel-filled.Mui-error': {
      color: '#d32f2f !important',
    },
  }

  const dateTime = dayjs(formData.reservation.date).set(
    'hour',
    Number(formData.reservation.time.substr(0, 2))
  )

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
        value={formData.contact.telephone}
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
      <div className='reservation-details mb-[5rem]'>
        <h3 className='block text-primary-yellow mb-[1rem] text-[1.2rem]'>
          Reservation Details
        </h3>
        <div className='reservation-details-wrapper grid grid-cols-2 gap-y-6 mb-[1rem]'>
          <div className='reservation-date text-white text-[2rem]'>
            <CalendarMonthIcon
              sx={{ color: '#FFF', marginRight: '0.5rem', fontSize: '3rem' }}
            />{' '}
            {dateTime.format('ddd, MMM D')}
          </div>
          <div className='reservation-guests text-white text-[2rem]'>
            <PeopleOutlineIcon
              sx={{ color: '#FFF', marginRight: '0.5rem', fontSize: '3rem' }}
            />{' '}
            {formData.reservation.guests}
          </div>
          <div className='reservation-time text-white text-[2rem]'>
            <AlarmOnIcon
              sx={{ color: '#FFF', marginRight: '0.5rem', fontSize: '3rem' }}
            />{' '}
            {dateTime.format('h:mm [pm]')}
          </div>
          {formData.reservation.occasion ? (
            <div className='reservation-time text-white text-[2rem] flex items-center gap-x-4'>
              {icons[formData.reservation.occasion]}
              {formData.reservation.occasion}
            </div>
          ) : null}
        </div>
        <div
          className='h-[1px] bg-[linear-gradient(to_right,_#fff,#495E57)] mb-[1rem] w-[85%]'
          role='separator'
          aria-roledescription='decoration line for content separation'
        />
      </div>
      <div>
        <label
          className='block text-primary-yellow mb-[1rem] text-[1.2rem]'
          htmlFor='comment'
        >
          Special Requests
        </label>
        <TextareaAutosize minRows={10} placeholder='Comment' id='comment' />
      </div>
    </>
  )
}

const TextareaAutosize = styled(BaseTextareaAutosize)(
  () => `
  box-sizing: border-box;
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 4px;
  resize: none;
  margin-bottom: 5rem;
  color: #000;
  background: #EDEFEE;

  &:hover {
    border-color: #F4CE14;
  }

  &:focus {
    border-color: #F4CE14;
    box-shadow: 0 0 0 2px #F4CE14;
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
)
