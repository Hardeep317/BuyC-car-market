import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import AddCars from '../Pages/AddCars'
import Home from '../Pages/Home'
import ProductDetails from '../Pages/ProductDetails'
import Products from '../Pages/Products'
import Store from '../Pages/Store'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/store' element={<Store />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/addcar' element={<AddCars />}/>
        <Route path={"/products/:product_id"} element={ <ProductDetails/> }></Route>
    </Routes>
  )
}

export default AllRoutes