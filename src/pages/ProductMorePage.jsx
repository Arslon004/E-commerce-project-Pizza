import React from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../data/products';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductMorePage = () => {
  const { productId } = useParams();
  const {image, filter, category, name, description, price, id} = products.find((product) => product.id === productId);
  return (
    <div className="container d-flex justify-content-center">
      <div className="card " >
        <LazyLoadImage style={{width:"400px",marginLeft:"auto",marginRight:"auto"}} src={image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 style={{fontSize:"30px",color:"green"}} className="card-title">{name}</h5>
            <p style={{fontSize:"25px"}} className="card-text">{description}</p>
          </div>
          <ul className="list-group ">
            <li style={{fontWeight:"700",fontSize:"30px"}} className="list-group-item">{category} <span className='badge bg-success'>{price} $</span></li>
          </ul>
          <div className="card-body">
            <Link className='btn btn-primary w-100' to={`/`}>Вернуться домой</Link>
          </div>
      </div>
    </div>
  )
}

export default ProductMorePage