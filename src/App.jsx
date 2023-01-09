import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/shared/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductInfo from './pages/ProductInfo'
import { getUserCart } from './store/slices/cart.slice'
import { getAllProducts } from './store/slices/products.slice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts()) 
    dispatch(getUserCart())
  }, [])


  
  //Codigo para crear un Usuaio

  /* useEffect(() => {
    const URL= 'https://e-commerce-api.academlo.tech/api/v1/users'

    const data = {
      firstName: "Daniel",
      lastName: "Tagua",
      email: "danieltagua1967@gmail.com",
      password: "pass1234",
      phone: "2616843564",
      role: "admin"
    } 

    axios.post(URL, data)
      .then(res => console.log(res))
      .catch(err => console.log(err)) 
  }, []) */
  //Fin creación Usuario

 return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/product/:id' element={<ProductInfo />} />
      </Routes>
    </div>
  )
}

export default App
