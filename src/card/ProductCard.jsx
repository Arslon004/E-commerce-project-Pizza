import React from 'react'

const ProductCard = ({image,filter,category,name,description,price}) => {
  return (
    <div className="card" >
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{category}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Go {name}</a>
      </div>
    </div>
  )
}

export default ProductCard