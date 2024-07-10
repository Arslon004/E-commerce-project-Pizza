import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout"
import ProductsPage from "./pages/ProductsPage"
import CartPage from "./pages/CartPage"
import FavoritePage from "./pages/FavoritePage"
import ProductMorePage from "./pages/ProductMorePage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<ProductsPage />} />
          <Route path="product/:productId" element={<ProductMorePage />} />

          <Route path="cart" element={<CartPage />} />
          <Route path="favorite" element={<FavoritePage />} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
