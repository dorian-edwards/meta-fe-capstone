import Alert from '@mui/material/Alert/Alert'

export default function ErrorAlert() {
  return (
    <div className='error-wrapper fixed top-20 w-full px-[5rem] z-[1000]'>
      <Alert
        severity='error'
        sx={{ border: '2px solid red', fontSize: '1.6rem', zIndex: 1000 }}
      >
        An unexpected error occurred. Please try again.
      </Alert>
    </div>
  )
}
