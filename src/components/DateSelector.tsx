import dayjs from 'dayjs'
import { DateSelectorProps } from '../dataTypes'
import { useBookingDispatchContext } from '../contexts/stateUtils'

export default function DateSelector({ date, setDate }: DateSelectorProps) {
  const dispatch = useBookingDispatchContext()

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
    dispatch({
      type: 'change_date',
      payload: { date: e.target.value },
    })
  }

  return (
    <div className='date-wrapper mb-[1rem]'>
      <label
        htmlFor='res-date'
        className='block text-[1.4rem] mb-[0.5rem] text-[rgba(0,_0,_0,_0.5)]'
      >
        Choose date
      </label>
      <input
        type='date'
        id='res-date'
        min={
          dayjs().get('hour') >= 22
            ? dayjs().add(1, 'day').format('YYYY-MM-DD')
            : dayjs().format('YYYY-MM-DD')
        }
        max={dayjs().add(60, 'day').format('YYYY-MM-DD')}
        value={date}
        onChange={handleDateChange}
        className='block border border-[rgba(0,_0,_0,_0.25)] rounded-[0.4rem] w-full max-w-[20rem] px-[1rem]'
        required
      />
    </div>
  )
}
