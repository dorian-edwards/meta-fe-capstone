import { useState } from 'react'
import { FormData } from '../dataTypes'
import ErrorAlert from '../components/ErrorAlert'
import BookingForm from '../components/BookingForm'

const initialData = {
  reservation: {
    date: '',
    time: '',
    guests: '',
    occasion: '',
  },
  contact: {
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
  },
}

export default function BookingPage({
  setBooked,
}: {
  setBooked: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [displayError, setDisplayError] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>(initialData)

  /*

  */
  return (
    <>
      {displayError ? <ErrorAlert /> : null}
      <section className='alternate-booking'>
        <BookingForm
          formData={formData}
          setDisplayError={setDisplayError}
          setFormData={setFormData}
          setBooked={setBooked}
        />
      </section>
    </>
  )
}
