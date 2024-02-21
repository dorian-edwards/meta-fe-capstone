import dayjs from 'dayjs'
import { FormData } from '../dataTypes'
import Calendar from './Calendar'
import OccasionSelector from './OccasionSelector'
import PartySize from './PartySize'
import TimeSelection from './TimeSelection'

export default function ReservationForm({
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
