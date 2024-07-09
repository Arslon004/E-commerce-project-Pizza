import React, { Fragment } from 'react'
import categories from '../data/categories'
import products from '../data/products'
import ProductCard from '../card/ProductCard'

const ProductsPage = () => {
  return (
   <Fragment>
    <section>
      <div className="container">
      {categories.map((category) => (
        <div key={category.name}>
          <h2>{category.name}</h2>
          <div className='row'>
            {products
              .filter((product) => product.category === category.name)
              .map((product) => <div className='col-12 col-sm-6 col-md-4'>
                <ProductCard key={product.id} {...product}/>
              </div>)}
          </div>
        </div>
      ))}

      </div>
    </section>
   </Fragment>
  )
}

export default ProductsPage