import {
  InputBase,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  styled,
} from '@mui/material'
import Cake from '../assets/icons/Cake'
import Glasses from '../assets/icons/Glasses'
import Cap from '../assets/icons/Cap'

export default function OccasionSelector({
  value,
  setValue,
}: {
  value: string
  setValue: (section: string, property: string, value: string) => void
}) {
  return (
    <FormControl fullWidth sx={{ mb: '3.6rem' }}>
      <InputLabel
        id='demo-simple-select-label'
        sx={{ fontSize: 16, padding: '0 1rem', color: '#000' }}
      >
        Occasion
      </InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={value}
        label='Occasion'
        onChange={(e) => setValue('reservation', 'occasion', e.target.value)}
        input={<BootstrapInput />}
        inputProps={{ IconComponent: () => null }}
      >
        <MenuItem value='' sx={{ fontSize: '1.6rem' }}>
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Anniversary'} sx={{ fontSize: '1.6rem' }}>
          <span className='flex items-center gap-x-[1rem]'>
            Anniversary <Glasses />
          </span>
        </MenuItem>
        <MenuItem value={'Birthday'} sx={{ fontSize: '1.6rem' }}>
          <span className='flex items-center gap-x-[1rem]'>
            Birthday <Cake />
          </span>
        </MenuItem>
        <MenuItem value={'Graduation'} sx={{ fontSize: '1.6rem' }}>
          <span className='flex items-center gap-x-[1rem]'>
            Graduation <Cap />
          </span>
        </MenuItem>
      </Select>
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
    padding: '16px 26px 15px 12px',
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
