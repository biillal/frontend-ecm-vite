import axios from "axios"
import { authActions } from "../slice/authSlice"
import { toast } from "react-toastify"


export function SingUpUser(user){
    return async (dispatch,getState)=>{
         try {
            dispatch(authActions.setLoading())
            const {data} = await axios.post('https://ecommerce-ypmm.onrender.com/api/v1/auth/signup',user)
            alert(data.message)
            console.log(data);
            dispatch(authActions.clearLoading())
            dispatch(authActions.register(data))
            localStorage.setItem('userEcm',JSON.stringify(data))
         } catch (error) {
            alert(error.response.data.errors[0].msg)
            dispatch(authActions.clearLoading())
         }
    }
}


export function signinUser(user){
    return async (dispatch,getState)=>{
         try {
            dispatch(authActions.setLoading())
            const {data} = await axios.post('https://ecommerce-ypmm.onrender.com/api/v1/auth/login',user)
            alert("logged in successfully")
            dispatch(authActions.clearLoading())
            dispatch(authActions.login(data))
            localStorage.setItem('userEcm',JSON.stringify(data))
         } catch (error) {
            alert(error.response.data.errors[0].msg)
            dispatch(authActions.clearLoading())
         }
    }
}