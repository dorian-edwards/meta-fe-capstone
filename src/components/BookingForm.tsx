import dayjs from 'dayjs'
import useSubmit from '../hooks/useSubmit'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FormData } from '../dataTypes'
import TitleText from './TitleText'
import Calendar from './Calendar'
import OccasionSelector from './OccasionSelector'
import PartySize from './PartySize'
import TimeSelection from './TimeSelection'
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton'
import ReservationImages from './ReservationImages'
import TextField from '@mui/material/TextField/TextField'
import ButtonPrimary from './ButtonPrimary'

export default function BookingForm({
  formData,
  setFormData,
  setDisplayError,
}: {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  setDisplayError: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { isLoading, response, submit } = useSubmit() //
  const navigate = useNavigate() // for navigating after successful form submission
  const [step, setStep] = useState<number>(1)

  const flashError = () => {
    setDisplayError(true)
    setTimeout(() => {
      setDisplayError(false)
    }, 5000)
  }

  const resetForm = () => {
    setFormData({
      reservation: { date: '', time: '', guests: '', occasion: '' },
      contact: {
        firstName: '',
        lastName: '',
        email: '',
        telephone: '',
      },
    })
  }

  useEffect(() => {
    if (!response) return

    if (response.status === 'error') {
      return flashError()
    }

    if (response.status === 'success') {
      resetForm()
      navigate('/confirmation', {
        state: response.details,
      })
    }
  }, [response, navigate])

  const reservationIsValid = (): boolean => {
    return (
      formData.reservation.date === '' ||
      formData.reservation.time === '' ||
      formData.reservation.guests === ''
    )
  }

  const updateForm = (section: string, property: string, value: string) => {
    const copy = structuredClone(formData)
    setFormData({
      ...copy,
      [section]: { ...copy[section], [property]: value },
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (reservationIsValid()) return
    submit(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <section className='reservation-details pt-[10rem] bg-[linear-gradient(to_right,_rgba(29,38,35,0.85),rgba(29,38,35,0.85)),url(./images/lemon-large.jpg)] bg-cover bg-no-repeat bg-center'>
        <div className='content-container'>
          <TitleText sx={{ marginBottom: '4rem' }}>
            {step === 1 ? 'Reservations' : 'Contact'}
          </TitleText>
          <div className='input-wrapper min-[530px]:grid min-[530px]:grid-cols-2 min-[530px]:gap-[2rem]'>
            {step === 1 ? (
              <ReservationForm formData={formData} updateForm={updateForm} />
            ) : (
              <ContactForm formData={formData} updateForm={updateForm} />
            )}
          </div>
        </div>
      </section>
      <ReservationImages />
      {step === 1 ? (
        <ButtonPrimary
          onClick={() => setStep(2)}
          sx={{
            display: 'block',
            width: '90%',
            maxWidth: '30rem',
            margin: '5rem auto',
          }}
        >
          Reserve A Table
        </ButtonPrimary>
      ) : (
        <LoadingButton
          type='submit'
          loading={isLoading}
          loadingPosition='center'
          disabled={reservationIsValid()}
          sx={{
            margin: '5rem auto',
            width: '90%',
            maxWidth: '30rem',
            backgroundColor: '#F4CE14',
            borderRadius: '1.5rem',
            padding: '1rem 2rem',
            fontSize: '1.8rem',
            fontWeight: 'medium',
            fontFamily: 'Karla',
            color: '#333',
            textTransform: 'none',
            letterSpacing: 'normal',
            display: 'flex',
            columnGap: '10px',
            lineHeight: '27px',
            '&:hover': {
              backgroundColor: '#F4CE14',
            },
            '&:disabled': {
              backgroundColor: '#EDEFEE',
            },
          }}
        >
          Confirm Reservation
        </LoadingButton>
      )}
    </form>
  )
}

export function ReservationForm({
  formData,
  updateForm,
}: {
  formData: FormData
  updateForm: (section: string, property: string, value: string) => void
}) {
  const minDate = dayjs().get('hour') >= 22 ? dayjs().add(1, 'day') : dayjs()
  return (
    <>
      {' '}
      <Calendar
        value={formData.reservation.date}
        setValue={updateForm}
        minDate={minDate}
      />
      <OccasionSelector
        value={formData.reservation.occasion}
        setValue={updateForm}
      />
      <PartySize value={formData.reservation.guests} setValue={updateForm} />
      <TimeSelection
        value={formData.reservation.time}
        setValue={updateForm}
        date={formData.reservation.date}
      />
    </>
  )
}

export function ContactForm({
  formData,
  updateForm,
}: {
  formData: FormData
  updateForm: (section: string, property: string, value: string) => void
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
        onChange={(e) => updateForm('contact', 'firstName', e.target.value)}
        sx={formInputStyles}
        required
      />
      <TextField
        id='last-name'
        label='Last name'
        type='text'
        variant='outlined'
        fullWidth
        value={formData.contact.lastName}
        onChange={(e) => updateForm('contact', 'lastName', e.target.value)}
        sx={formInputStyles}
      />
      <TextField
        id='email'
        label='Email'
        type='email'
        variant='outlined'
        fullWidth
        value={formData.contact.email}
        onChange={(e) => updateForm('contact', 'email', e.target.value)}
        sx={formInputStyles}
      />
      <TextField
        id='phone'
        label='Phone'
        type='tel'
        variant='outlined'
        fullWidth
        value={formData.contact.phone}
        onChange={(e) => updateForm('contact', 'telephone', e.target.value)}
        sx={{ ...formInputStyles, marginBottom: '5.9rem' }}
        error
        helperText='broh'
      />
    </>
  )
}
