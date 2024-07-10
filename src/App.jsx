import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Loading from "./components/loading/Loading"

const Layout = lazy(() => import("./components/layout"))
const ProductsPage = lazy(() => import("./pages/ProductsPage"))
const CartPage = lazy(() => import("./pages/CartPage"))
const FavoritePage = lazy(() => import("./pages/FavoritePage"))
const ProductMorePage = lazy(() => import("./pages/ProductMorePage"))


function App() {
  return (
    <Suspense fallback={<Loading/>}>
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
    </Suspense>
  )
}

export default App
