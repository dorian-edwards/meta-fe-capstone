import { useState } from 'react'
import { FormData } from '../dataTypes'
import ErrorAlert from '../components/ErrorAlert'
import BookingForm from '../components/BookingForm'

export default function BookingPage() {
  const [displayError, setDisplayError] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({
    date: '',
    time: '',
    guests: '',
    occasion: '',
  })

  return (
    <>
      {displayError ? <ErrorAlert /> : null}
      <section className='alternate-booking'>
        <BookingForm
          formData={formData}
          setDisplayError={setDisplayError}
          setFormData={setFormData}
        />
      </section>
    </>
  )
}
