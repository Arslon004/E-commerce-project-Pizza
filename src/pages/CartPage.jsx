import React, { useContext } from 'react'
import { ProductContext } from '../components/context/ProductContext'
import CardCard from '../card/CardCard';

const CartPage = () => {
  const {cart,totalPrice}=useContext(ProductContext);
  return (
    <div className='container'>
      {cart.map((pr)=><CardCard key={pr.id} {...pr}/>)}
      <button className='btn btn-warning'>Checkout {totalPrice} $</button>
    </div>
  )
}

export default CartPage