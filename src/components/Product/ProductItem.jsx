function ProductItem({ product }) {
  return (
    <div className='p-5 bg-slate-800 rounded-md text-center'>
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  )
}

export default ProductItem
