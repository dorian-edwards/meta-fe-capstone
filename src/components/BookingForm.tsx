import useSubmit from '../hooks/useSubmit'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FormData } from '../dataTypes'
import TitleText from './TitleText'
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton'
import ReservationImages from './ReservationImages'
import ButtonPrimary from './ButtonPrimary'
import ContactForm from './ContactForm'
import ReservationForm from './ReservationForm'

export interface ContactErrors {
  firstName: {
    error: boolean
    message: string
  }
  lastName: {
    error: boolean
    message: string
  }
  email: {
    error: boolean
    message: string
  }
  telephone: {
    error: boolean
    message: string
  }
}

const initialContactErrors = {
  firstName: {
    error: false,
    message: '',
  },
  lastName: {
    error: false,
    message: '',
  },
  email: {
    error: false,
    message: '',
  },
  telephone: {
    error: false,
    message: '',
  },
}

export default function BookingForm({
  formData,
  setFormData,
  setDisplayError,
  setBooked,
}: {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  setDisplayError: React.Dispatch<React.SetStateAction<boolean>>
  setBooked: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { isLoading, response, submit } = useSubmit() //
  const navigate = useNavigate() // for navigating after successful form submission
  const [step, setStep] = useState<number>(1)
  const [contactErrors, setContactErrors] =
    useState<ContactErrors>(initialContactErrors)

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
      setBooked(true)
      navigate('/confirmation', {
        state: response.details,
      })
    }
  }, [response, navigate])

  const reservationIsInvalid = (): boolean => {
    const { date, time, guests } = formData.reservation
    return date === '' || time === '' || guests === ''
  }

  const contactIsInvalid = (): boolean => {
    const { firstName, lastName, email, telephone } = formData.contact
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      telephone.trim() === ''
    )
      return true
    for (const { error } of Object.values(contactErrors)) {
      if (error) return true
    }
    return false
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
    if (contactIsInvalid()) return
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
              <ContactForm
                formData={formData}
                updateForm={updateForm}
                contactErrors={contactErrors}
                setContactErrors={setContactErrors}
              />
            )}
          </div>
        </div>
      </section>
      <ReservationImages />
      {step === 1 ? (
        <ButtonPrimary
          onClick={() => setStep(2)}
          disabled={reservationIsInvalid()}
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
          disabled={contactIsInvalid()}
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
