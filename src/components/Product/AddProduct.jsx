import { useState } from 'react'

import ProductForm from './ProductForm'
import ProductItem from './ProductItem'

function AddProduct() {
  const [products, setProducts] = useState([])

  function addProductHandler(newProduct) {
    setProducts((products) => [...products, newProduct])
  }

  return (
    <>
      <ProductForm onAdd={addProductHandler} />
      <div className='flex flex-wrap justify-center max-w-xl mx-auto my-10 gap-5'>
        {products.map((item, index) => (
          <ProductItem key={index} product={item} />
        ))}
      </div>
    </>
  )
}

export default AddProduct
