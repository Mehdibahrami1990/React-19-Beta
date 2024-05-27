import AddButton from './AddButton'

function ProductForm({ onAdd }) {
  async function formAction(formData) {
    await new Promise((res) => setTimeout(res, 2000))

    const newProduct = {
      title: formData.get('title'),
      price: formData.get('price'),
    }

    onAdd(newProduct)
  }

  return (
    <form
      action={formAction}
      className='flex flex-col gap-5 max-w-xl p-8 mx-auto my-8 bg-slate-800 rounded-md'
    >
      <input
        name='title'
        id='title'
        type='text'
        className='p-2 bg-slate-600 outline-none rounded-md'
        placeholder='Title'
      />
      <input
        name='price'
        id='price '
        type='text'
        className='p-2 bg-slate-600 outline-none rounded-md'
        placeholder='Price'
      />
      <AddButton />
    </form>
  )
}

export default ProductForm
