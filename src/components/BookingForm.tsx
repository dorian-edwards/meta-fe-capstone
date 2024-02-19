import dayjs from 'dayjs'
import useSubmit from '../hooks/useSubmit'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { FormData } from '../dataTypes'
import TitleText from './TitleText'
import Calendar from './Calendar'
import OccasionSelector from './OccasionSelector'
import PartySize from './PartySize'
import TimeSelection from './TimeSelection'
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton'
import ReservationImages from './ReservationImages'

export default function BookingForm({
  formData,
  setFormData,
  setDisplayError,
}: {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  setDisplayError: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const minDate = dayjs().get('hour') >= 22 ? dayjs().add(1, 'day') : dayjs()
  const { isLoading, response, submit } = useSubmit() //
  const navigate = useNavigate() // for navigating after successful form submission

  const flashError = () => {
    setDisplayError(true)
    setTimeout(() => {
      setDisplayError(false)
    }, 5000)
  }

  const resetForm = () => {
    setFormData({ date: '', time: '', guests: '', occasion: '' })
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

  const formIsInvalid = (): boolean => {
    return (
      formData.date === '' || formData.time === '' || formData.guests === ''
    )
  }

  const handleDateChange = (date: string) => {
    setFormData({ ...formData, date: date })
  }

  const handleOccasionChange = (occasion: string) => {
    setFormData({ ...formData, occasion: occasion })
  }

  const handleGuestsChange = (guests: string) => {
    setFormData({ ...formData, guests: guests })
  }

  const handleTimeChange = (time: string) => {
    setFormData({ ...formData, time: time })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formIsInvalid()) return
    submit(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <section className='reservation-details pt-[10rem] bg-[linear-gradient(to_right,_rgba(29,38,35,0.85),rgba(29,38,35,0.85)),url(./images/lemon-large.jpg)] bg-cover bg-no-repeat bg-center'>
        <div className='content-container'>
          <TitleText sx={{ marginBottom: '4rem' }}>Reservations</TitleText>
          <div className='input-wrapper min-[530px]:grid min-[530px]:grid-cols-2 min-[530px]:gap-[2rem]'>
            <Calendar
              value={formData.date}
              setValue={handleDateChange}
              minDate={minDate}
            />
            <OccasionSelector
              value={formData.occasion}
              setValue={handleOccasionChange}
            />
            <PartySize value={formData.guests} setValue={handleGuestsChange} />
            <TimeSelection
              value={formData.time}
              setValue={handleTimeChange}
              date={formData.date}
            />
          </div>
        </div>
      </section>
      <ReservationImages />
      <LoadingButton
        type='submit'
        loading={isLoading}
        loadingPosition='center'
        disabled={formIsInvalid()}
        sx={{
          margin: '5rem auto',
          minWidth: '30rem',
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
          '&:hover': {
            backgroundColor: '#F4CE14',
          },
          '&:disabled': {
            backgroundColor: '#EDEFEE',
          },
        }}
      >
        Reserve a table
      </LoadingButton>
    </form>
  )
}
