import axios from "axios"
import { passwordActions } from "../slice/passwordSlice"


export function forgotPassword(email) {
    return async (dispatch, getState) => {
        try {
            dispatch(passwordActions.setLoading())
            const { data } = await axios.post('https://e-commerce-ab.onrender.com/api/password/reset-password-link',  {email} )
            dispatch(passwordActions.clearLoading())
            alert(data.message)
        } catch (error) {
            console.log(error);
            dispatch(passwordActions.clearLoading())
        }
    }
}


export function getRessetPassword(userId , token) {
    return async (dispatch, getState) => {
        try {
            await axios.get(`https://e-commerce-ab.onrender.com/api/password/reset-password/${userId}/${token}`)
        } catch (error) {
            console.log(error);
            dispatch(passwordActions.setError())
        }
    }
}



export function RessetPassword(newPassword ,user) {
    return async (dispatch, getState) => {
        try {
            dispatch(passwordActions.setLoading())
            const {data } = await axios.post(`https://e-commerce-ab.onrender.com/api/password/reset-password/${user.userId}/${user.token}`,{
                password:newPassword
            })
            dispatch(passwordActions.clearLoading())
            alert(data.message)
        } catch (error) {
            console.log(error);

        }
    }
}