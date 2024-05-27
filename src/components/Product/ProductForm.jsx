function ProductForm({ onAdd }) {
  async function formAction(formData) {
    const newProduct = {
      title: formData.get('title'),
      price: formData.get('price'),
    };

    onAdd(newProduct);
  }

  return (
    <form
      action={formAction}
      className="flex flex-col gap-5 max-w-xl p-8 mx-auto my-8 bg-slate-800 rounded-md"
    >
      <input
        type="text"
        id="title"
        name="title"
        className="p-2 bg-slate-600 outline-none rounded-md"
        placeholder="Title"
      />
      <input
        type="text"
        id="price"
        name="price"
        className="p-2 bg-slate-600 outline-none rounded-md"
        placeholder="Price"
      />
      <button
        type="submit"
        className="p-2 bg-slate-900 text-slate-100 rounded-md"
      >
        AddProduct
      </button>
    </form>
  );
}

export default ProductForm;
