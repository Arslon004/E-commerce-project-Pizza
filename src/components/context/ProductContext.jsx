import { createContext, useState } from "react"
import products from "../../data/products";
import CART from "../../constants";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem(CART)) || []);
  const addToCart = (id) => {
    const product = products.find((product) => product.id === id);
    const productInCart = cart.find((pr) => pr.id === id);
    let newCart;
    if (productInCart) {
      newCart = cart.map((pr) => {
        if (pr.id === id) {
          pr.quantity++;
        }
        return pr;
      })
    } else {
      product.quantity = 1;
      newCart = ([...cart, product])
    }
    setCart(newCart)
    localStorage.setItem(CART, JSON.stringify(newCart));
  }
  const increase = (id) => {
    let newCart = cart.map((pr) => {
      if (pr.id === id) {
        pr.quantity++;
      }
      return pr;
    })
    setCart(newCart);
    localStorage.setItem(CART, JSON.stringify(newCart));
  }
  const decrease = (id) => {
    let productInCart = cart.find((pr) => pr.id === id);
    let newCart;
    if (productInCart.quantity > 1) {
       newCart = cart.map((pr) => {
        if (pr.id === id) {
          pr.quantity--;
        }
        return pr;
      })
    }else{
      newCart=cart.filter((pr)=>pr.id !== id);
    }
    setCart(newCart);
    localStorage.setItem(CART, JSON.stringify(newCart));
  }

  const totalPrice = cart.reduce((acc, pr) => acc + pr.price * pr.quantity, 0);


  const state = { cart, totalPrice,addToCart, increase, decrease }
  return (
    <ProductContext.Provider value={state}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider