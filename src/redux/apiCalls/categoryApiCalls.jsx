import axios from "axios"
import { categoryActions } from "../slice/categorySlice"


export function createCategory(cat) {
    return async (dispatch, getState) => {
        try {
            dispatch(categoryActions.setLoading())
            const { data } = await axios.post('https://e-commerce-ab.onrender.com/api/categories', { cat }, {
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token,
                    "Content-Type" : "multipart/form-data"
                }
            })
            dispatch(authActions.clearLoading())
            dispatch(categoryActions.setCategories(data))
        } catch (error) {
            alert(error.response.data.errors[0].msg)
            dispatch(authActions.clearLoading())
        }
    }
}
export function getAllCategories() {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.get('https://e-commerce-ab.onrender.com/api/categories')
            dispatch(categoryActions.setGetCategories(data.data))
        } catch (error) {
            alert(error.response.data.errors[0].msg)
            dispatch(authActions.clearLoading())
        }
    }
}