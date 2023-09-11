import axios from "axios"
import { authActions } from "../slice/authSlice"
import { toast } from "react-toastify"


export function SingUpUser(user) {
    return async (dispatch, getState) => {
        try {
            dispatch(authActions.setLoading())
            const { data } = await axios.post('https://e-commerce-ab.onrender.com/api/auth/signup', user)
            dispatch(authActions.clearLoading())
            console.log(data.message);
            dispatch(authActions.register(data.message))

        } catch (error) {
            console.log(error)
            dispatch(authActions.clearLoading())
        }
    }
}


export function signinUser(user) {
    return async (dispatch, getState) => {
        try {
            dispatch(authActions.setLoading())
            const { data } = await axios.post('https://e-commerce-ab.onrender.com/api/auth/signIn', user)
            alert(data.message)
            dispatch(authActions.clearLoading())
            dispatch(authActions.login(data))
            localStorage.setItem('userEcm', JSON.stringify(data))
        } catch (error) {
            alert(error.response.data.message)
            dispatch(authActions.clearLoading())
        }
    }
}




//logout user
export function logoutUser() {
    return async (dispatch, getState) => {
        dispatch(authActions.logout())
        localStorage.removeItem("userEcm")
    }
}


export function verifyEmail(userId,token) {
    return async (dispatch, getState) => {
        try {
            console.log(userId,token);
            await axios.get(`https://e-commerce-ab.onrender.com/api/auth/${userId}/verify/${token}`)
            dispatch(authActions.setIsEmailVerified())

        } catch (error) {
            console.log(error);
            dispatch(authActions.clearLoading())
        }
    }
}