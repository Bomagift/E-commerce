import './App.css'
import LandingPage from './LandingPage/LandingPage'
import ProductDisplay from './ProductDisplay/ProductDisplay'
import Payment from './Payment/Payment'
import { Routes, Route, BrowserRouter } from "react-router-dom"
function App() {
  return (
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}>
          </Route>
          <Route path="Payment" element={<Payment />}>
         
          </Route>
          <Route path="ProductDisplay" element={<ProductDisplay />}>
          </Route>
    </Routes>
      </BrowserRouter>
  )
}

export default App
