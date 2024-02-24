import { useState } from 'react'
import { Response, FormData } from '../dataTypes'
import { useBookingDispatchContext } from '../contexts/stateUtils'

function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export default function useSubmit() {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<Response | null>(null)
  const dispatch = useBookingDispatchContext()

  async function submit(data: FormData) {
    const random = Math.random()
    setLoading(true)

    try {
      await wait(2000)
      if (random <= 0.25) throw new Error('Oops something went wrong 🤪')
      dispatch({
        type: 'reserve_time',
        payload: {
          ...data.reservation,
          ...data.contact,
          date: data.reservation.date,
        },
      })
      setResponse({
        status: 'success',
        details: {
          ...data,
        },
      })
    } catch (err) {
      setResponse({
        status: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  return { isLoading, response, submit }
}
