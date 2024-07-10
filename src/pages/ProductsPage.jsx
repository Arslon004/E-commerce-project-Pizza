import React, { Fragment } from 'react';
import categories from '../data/categories';
import products from '../data/products';
import ProductCard from '../card/ProductCard';

const ProductsPage = () => {
  return (
    <Fragment>
      <section>
        <div className="container">
          {categories.map((category) => (
            <div key={category.name}>
              <h2 className="my-4">{category.name}</h2>
              <div className="row">
                {products
                  .filter((product) => product.category === category.name)
                  .map((product) => (
                    <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                      <ProductCard {...product} />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default ProductsPage;
