import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import SignUp from './pages/auth/SignUp'
import SignIn from './pages/auth/SignIn'
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import VerifyEmail from './pages/verify-email/VerifyEmail'

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
          <Route path='/users/:userId/verify/:token' element={user ? <Home/> : <VerifyEmail/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
