import FormControl from '@mui/material/FormControl/FormControl'
import InputLabel from '@mui/material/InputLabel/InputLabel'
import MenuItem from '@mui/material/MenuItem/MenuItem'
import Select from '@mui/material/Select/Select'
import { TimeSelectorProps } from '../dataTypes'
import { useBookingDataContext } from '../contexts/stateUtils'
import FormHelperText from '@mui/material/FormHelperText/FormHelperText'

export default function TimeSelector({
  time,
  setTime,
  date,
}: TimeSelectorProps) {
  const { selectedDateAvailableBookings } = useBookingDataContext()

  return (
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
        required
        disabled={selectedDateAvailableBookings.length === 0}
      >
        {selectedDateAvailableBookings.map((time) => (
          <MenuItem key={time} value={time} sx={{ fontSize: '1.4rem' }}>
            {time}
          </MenuItem>
        ))}
      </Select>
      {date && selectedDateAvailableBookings.length === 0 ? (
        <FormHelperText sx={{ color: '#F00', fontSize: '1.2rem' }}>
          No reservations available
        </FormHelperText>
      ) : null}
    </FormControl>
  )
}
