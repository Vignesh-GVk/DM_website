import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandPage from './Component/LandPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from './Component/AboutPage';



const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
<Route path='/' element={<LandPage/>}/>
<Route path='/about' element={<AboutPage/>}/>


</Routes>
</BrowserRouter>

      
    </div>
  )
}

export default App