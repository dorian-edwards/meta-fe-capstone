import {
  InputBase,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  styled,
} from '@mui/material'

export interface PartySizeProps {
  value: string
  setValue: (s: string) => void
}

export default function PartySize({ value, setValue }: PartySizeProps) {
  return (
    <FormControl fullWidth sx={{ mb: '3.6rem' }}>
      <InputLabel
        id='guests-label'
        sx={{ fontSize: 16, padding: '0 1rem', color: '#000' }}
      >
        Party Size
      </InputLabel>
      <Select
        labelId='guests-label'
        id='guests'
        label='Party Size'
        value={value}
        input={<BootstrapInput />}
        inputProps={{ IconComponent: () => null }}
        onChange={(e) => setValue(e.target.value)}
        required
      >
        <MenuItem value='' sx={{ fontSize: '1.6rem' }}>
          <em>None</em>
        </MenuItem>
        <MenuItem value={'1'} sx={{ fontSize: '1.6rem' }}>
          <span className='flex items-center gap-x-[1rem]'>1</span>
        </MenuItem>
        <MenuItem value={'2'} sx={{ fontSize: '1.6rem' }}>
          <span className='flex items-center gap-x-[1rem]'>2</span>
        </MenuItem>
        <MenuItem value={'3'} sx={{ fontSize: '1.6rem' }}>
          <span className='flex items-center gap-x-[1rem]'>3</span>
        </MenuItem>
        <MenuItem value={'4'} sx={{ fontSize: '1.6rem' }}>
          <span className='flex items-center gap-x-[1rem]'>4</span>
        </MenuItem>
        <MenuItem value={'5'} sx={{ fontSize: '1.6rem' }}>
          <span className='flex items-center gap-x-[1rem]'>5</span>
        </MenuItem>
        <MenuItem value={'6'} sx={{ fontSize: '1.6rem' }}>
          <span className='flex items-center gap-x-[1rem]'>6</span>
        </MenuItem>
        <MenuItem value={7} sx={{ fontSize: '1.6rem' }}>
          <span className='flex items-center gap-x-[1rem]'>7</span>
        </MenuItem>
        <MenuItem value={8} sx={{ fontSize: '1.6rem' }}>
          <span className='flex items-center gap-x-[1rem]'>8</span>
        </MenuItem>
        <MenuItem value={9} sx={{ fontSize: '1.6rem' }}>
          <span className='flex items-center gap-x-[1rem]'>9</span>
        </MenuItem>
        <MenuItem value={10} sx={{ fontSize: '1.6rem' }}>
          <span className='flex items-center gap-x-[1rem]'>10</span>
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
