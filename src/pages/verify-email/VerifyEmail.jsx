import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { verifyEmail } from '../../redux/apiCalls/authApiCalls'

function VerifyEmail() {
  const dispatch = useDispatch()
  const {isEmailVerified} = useSelector((state=>state.auth))
  const {userId,token} = useParams()
  useEffect(()=>{
    dispatch(verifyEmail(userId,token))
  },[userId,token])
  return (
    <div className=''>
      {
        isEmailVerified ?
          <div className='flex justify-center flex-col lg:mt-[180px] mt-[230px] gap-y-6 items-center   '>
            <i class="ri-checkbox-circle-fill text-5xl text-green-400"></i>
            <h1 className='text-green-600 lg:text-3xl '>Your email address has been successfully veried</h1>
            <Link to='/signip' className='border py-2 px-4 rounded-md bg-green-600 text-white'>Go To Login Page</Link>
          </div>
          :
          <div className='flex flex-col gap-y-6 items-center lg:mt-[250px] mt-[280px]'>
            <h1 className='text-center text-5xl text-red-600 '>Not Found</h1>
            <Link to='/signup' className='border py-2  px-4 rounded-md bg-red-500 text-white'>Go Back</Link>

          </div>
      }
    </div>
  )
}

export default VerifyEmail
