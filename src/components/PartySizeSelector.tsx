import { Slider } from '@mui/material'

export default function PartySizeSelector({
  guests,
  setGuests,
}: {
  guests: number
  setGuests: React.Dispatch<React.SetStateAction<number>>
}) {
  const marks = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' },
  ]

  return (
    <Slider
      name='guests'
      value={guests}
      onChange={(_e, val) => setGuests(val as number)} // <- underscore before a parameter name makes it exempt from the check. This removes the 'value is never read' warning
      aria-label='Temperature'
      getAriaValueText={() => `Party of ${guests}`}
      valueLabelDisplay='auto'
      step={1}
      marks={marks}
      min={1}
      max={10}
      sx={{
        display: 'block',
        width: '100%',
        maxWidth: 200,
        color: '#495E57',
        marginBottom: '2.5rem',
      }}
    />
  )
}
