

import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Store from './Pages/Store'
import Success from './Pages/Success'
import Cancel from './Pages/Cancel'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  

  return (
    <>
   <Navbar/>

   <BrowserRouter>
   
<Routes>
  <Route path='/' element={<Store/>}/>
  <Route path='/success' element={<Success/>}/>
  <Route path='/cancel' element={<Cancel/>}/>

 
</Routes>


   </BrowserRouter>
    </>
  )
}

export default App
