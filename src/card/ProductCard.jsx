import React, { Fragment, useContext } from 'react';

import styles from "./Cards.module.css";
import { Link } from 'react-router-dom';
import { ProductContext } from '../components/context/ProductContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductCard = ({ image, filter, category, name, description, price, id }) => {
  const { addToCart, cart, increase, decrease } = useContext(ProductContext);
  let checkProductInCart = cart.find((pr) => pr.id === id)
  return (
    <div className="card" >
      <LazyLoadImage src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className={`card-title ${styles.card__title}`}>{name}</h5>
        <p className={`card-text ${styles.card__desc}`}>{description}</p>
        <Link to={`/product/${id}`} className='btn btn-secondary mb-2'>Более...</Link>
        {
          checkProductInCart
            ?
            <div className="btn-group w-100" >
              <button onClick={() => decrease(id)} type="button" className="btn btn-danger">-</button>
              <span  className="btn btn-primary">{checkProductInCart.quantity}</span>
              <button onClick={() => increase(id)} type="button" className="btn btn-success">+</button>
            </div>
            :
            <button onClick={() => addToCart(id)} className="btn btn-primary w-100">Добавить в корзину</button>
        }
      </div>
    </div>
  )
}

export default ProductCard