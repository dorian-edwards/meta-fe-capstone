import {
  InputBase,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  styled,
  FormHelperText,
} from '@mui/material'
import { useBookingDataContext } from '../contexts/stateUtils'

export default function TimeSelection({
  value,
  setValue,
  date,
}: {
  value: string
  setValue: (section: string, property: string, value: string) => void

  date: string
}) {
  const { selectedDateAvailableBookings } = useBookingDataContext()

  return (
    <FormControl fullWidth sx={{ mb: '3.6rem' }}>
      <InputLabel
        id='time-label'
        sx={{ fontSize: 16, padding: '0 1rem', color: '#000' }}
      >
        Select Time
      </InputLabel>
      <Select
        labelId='time-label'
        id='time-select'
        label='Time'
        value={value}
        input={<BootstrapInput />}
        inputProps={{ IconComponent: () => null }}
        onChange={(e) => setValue('reservation', 'time', e.target.value)}
        required
        disabled={selectedDateAvailableBookings.length === 0}
      >
        {selectedDateAvailableBookings.map((time) => (
          <MenuItem key={time} value={time} sx={{ fontSize: '1.4rem' }}>
            {time}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText sx={{ color: '#F00', fontSize: '1.2rem' }}>
        {date && selectedDateAvailableBookings.length === 0
          ? 'No reservations available'
          : ' '}
      </FormHelperText>
    </FormControl>
  )
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    // marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#EDEFEE',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '15.5px 26px 15.5px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#495E57',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))
