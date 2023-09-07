import axios from "axios"
import { authActions } from "../slice/authSlice"
import { toast } from "react-toastify"


export function SingUpUser(user) {
    return async (dispatch, getState) => {
        try {
            dispatch(authActions.setLoading())
            const { data } = await axios.post('http://localhost:5000/api/auth/signup', user)
            dispatch(authActions.clearLoading())
            dispatch(authActions.register(data))

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
            const { data } = await axios.post('http://localhost:5000/api/auth/signIn', user)
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
            const { data } = await axios.get(`http://localhost:5000/api/auth/${userId}/verify/${token}`)
            dispatch(authActions.setIsEmailVerified())

        } catch (error) {
            alert(error.response.data.errors[0].msg)
            dispatch(authActions.clearLoading())
        }
    }
}