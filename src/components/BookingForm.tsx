import { useState } from 'react'
import ButtonPrimary from './ButtonPrimary'
import OccasionSelector from './OccasionSelector'
import FormControl from '@mui/material/FormControl/FormControl'
import MenuItem from '@mui/material/MenuItem/MenuItem'
import Select from '@mui/material/Select/Select'
import InputLabel from '@mui/material/InputLabel/InputLabel'
import PartySizeSelector from './PartySizeSelector'

export default function BookingForm() {
  const [guests, setGuests] = useState<number>(1)
  const [occasion, setOccasion] = useState<string>('')
  const [time, setTime] = useState<string>('')

  return (
    <section className='form-wrapper pt-[6.2rem] pb-[9.2rem] min-[560px]:pt-[16rem]'>
      <div className='content-container'>
        <h2 className='text-title pb-[5rem]'>Reserve a table</h2>
        <form style={{ maxWidth: 400 }}>
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
              min={todayAsString()}
              className='block border border-[rgba(0,_0,_0,_0.25)] rounded-[0.4rem] w-full max-w-[20rem] px-[1rem]'
            />
          </div>
          <FormControl variant='standard' sx={{ mb: '1rem', minWidth: 120 }}>
            <InputLabel
              id='time-select-label'
              sx={{
                fontSize: '1.4rem',
                fontFamily: 'Karla',
                color: 'rgba(0, 0, 0, 0.5)',
              }}
            >
              Time
            </InputLabel>
            <Select
              labelId='time-select-label'
              id='time-select'
              value={time}
              onChange={(e) => setTime(e.target.value)}
              label='Time'
              sx={{ fontSize: '1.4rem' }}
            >
              <MenuItem value={10} sx={{ fontSize: '1.4rem' }}>
                5:00pm
              </MenuItem>
              <MenuItem value={20} sx={{ fontSize: '1.4rem' }}>
                Twenty
              </MenuItem>
              <MenuItem value={30} sx={{ fontSize: '1.4rem' }}>
                Thirty
              </MenuItem>
            </Select>
          </FormControl>
          <PartySizeSelector guests={guests} setGuests={setGuests} />
          <OccasionSelector occasion={occasion} setOccasion={setOccasion} />
          <ButtonPrimary>Make Your Reservation</ButtonPrimary>
        </form>
      </div>
    </section>
  )
}

function todayAsString(): string {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${year}-${month < 10 ? '0' + month : month}-${
    day < 10 ? '0' + day : day
  }`
}
