import Alert from '@mui/material/Alert/Alert'

export default function ErrorAlert() {
  return (
    <div className='error-wrapper fixed top-20 w-full px-[5rem]'>
      <Alert
        severity='error'
        sx={{ border: '2px solid red', fontSize: '1.6rem' }}
      >
        An unexpected error occurred. Please try again.
      </Alert>
    </div>
  )
}
