import { useFormStatus } from 'react-dom'

function AddButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      className='p-2 bg-slate-900 text-slate-100 rounded-md'
    >
      {pending ? 'Adding...' : 'Add Product'}
    </button>
  )
}

export default AddButton
