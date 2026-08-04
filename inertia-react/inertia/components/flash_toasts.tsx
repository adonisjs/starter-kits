import { useEffect } from 'react'
import { toast, Toaster } from 'sonner'
import { usePage } from '@inertiajs/react'
import { type Data } from '@generated/data'
import { CircleAlert, CircleCheck } from 'lucide-react'

export default function FlashToasts() {
  const { url, props } = usePage<Data.SharedProps>()

  useEffect(() => {
    toast.dismiss()
  }, [url])

  useEffect(() => {
    if (props.flash?.error) toast.error(props.flash.error, { id: 'flash' })
    if (props.flash?.success) toast.success(props.flash.success, { id: 'flash' })
  })

  return (
    <Toaster
      position="top-center"
      toastOptions={{ unstyled: true }}
      icons={{
        success: <CircleCheck size={18} strokeWidth={1.8} />,
        error: <CircleAlert size={18} strokeWidth={1.8} />,
      }}
    />
  )
}
