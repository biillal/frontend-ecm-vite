import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import SignUp from './pages/auth/SignUp'
import SignIn from './pages/auth/SignIn'
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'

function App() {
  const { user } = useSelector((state) => state.auth)
  return (
    <>

      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/signup' element={user ? <Home/> : <SignUp />} />
          <Route path='/signip' element={user ? <Home/> : <SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
