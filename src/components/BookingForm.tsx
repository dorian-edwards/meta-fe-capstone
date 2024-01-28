import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OccasionSelector from './OccasionSelector'
import PartySizeSelector from './PartySizeSelector'
import DateSelector from './DateSelector'
import TimeSelector from './TimeSelector'
import useSubmit from '../hooks/useSubmit'
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton'
import ErrorAlert from './ErrorAlert'

export default function BookingForm() {
  const navigate = useNavigate()
  const { isLoading, response, submit } = useSubmit()

  const [date, setDate] = useState<string>('')
  const [time, setTime] = useState<string>('')
  const [guests, setGuests] = useState<number>(1)
  const [occasion, setOccasion] = useState<string>('')
  const [displayError, setDisplayError] = useState<boolean>(false)

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

  function resetForm() {
    setTime('')
    setGuests(1)
    setOccasion('')
  }

  function flashError() {
    setDisplayError(true)
    setTimeout(() => {
      setDisplayError(false)
    }, 5000)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submit({
      date,
      time,
      guests,
      occasion,
    })
  }

  return (
    <>
      {displayError ? <ErrorAlert /> : null}
      <section className='form-wrapper pt-[6.2rem] pb-[9.2rem] min-[560px]:pt-[16rem]'>
        <div className='content-container'>
          <h2 className='text-title pb-[5rem]'>Reserve a table</h2>
          <form className='max-w-[40rem]' onSubmit={handleSubmit}>
            <DateSelector date={date} setDate={setDate} />
            <TimeSelector time={time} setTime={setTime} date={date} />
            <PartySizeSelector guests={guests} setGuests={setGuests} />
            <OccasionSelector occasion={occasion} setOccasion={setOccasion} />
            <LoadingButton
              type='submit'
              loading={isLoading}
              loadingPosition='center'
              sx={{
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
              }}
            >
              Make Your Reservation
            </LoadingButton>
          </form>
        </div>
      </section>
    </>
  )
}
