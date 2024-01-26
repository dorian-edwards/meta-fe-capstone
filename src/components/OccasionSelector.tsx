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
  occasion,
  setOccasion,
}: {
  occasion: string
  setOccasion: React.Dispatch<React.SetStateAction<string>>
}) {
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      //   marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '16px 26px 10px 12px',
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

  return (
    <FormControl fullWidth sx={{ mb: '3.6rem', mt: '1rem', maxWidth: 300 }}>
      <InputLabel
        id='demo-simple-select-label'
        sx={{ fontSize: 16, backgroundColor: '#fff', padding: '0 1rem' }}
      >
        Occasion
      </InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={occasion}
        label='Occasion'
        onChange={(e) => setOccasion(e.target.value)}
        input={<BootstrapInput />}
        inputProps={{ IconComponent: () => null }}
      >
        <MenuItem value='' sx={{ fontSize: '1.6rem' }}>
          <em>None</em>
        </MenuItem>
        <MenuItem value={'anniversary'} sx={{ fontSize: '1.6rem' }}>
          <span className='flex items-center gap-x-[1rem]'>
            Anniversary <Glasses />
          </span>
        </MenuItem>
        <MenuItem value={'birthday'} sx={{ fontSize: '1.6rem' }}>
          <span className='flex items-center gap-x-[1rem]'>
            Birthday <Cake />
          </span>
        </MenuItem>
        <MenuItem value={'graduation'} sx={{ fontSize: '1.6rem' }}>
          <span className='flex items-center gap-x-[1rem]'>
            Graduation <Cap />
          </span>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
