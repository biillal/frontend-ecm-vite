import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import SignUp from './pages/auth/SignUp'
import SignIn from './pages/auth/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/signip' element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
