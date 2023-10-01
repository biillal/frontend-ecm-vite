import axios from "axios"
import { categoryActions } from "../slice/categorySlice"


export function createCategory(cat) {
    return async (dispatch, getState) => {
        try {
            dispatch(categoryActions.setLoading())
            const { data } = await axios.post('http://localhost:5000/api/categories', { cat }, {
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
            const { data } = await axios.get('http://localhost:5000/api/categories')
            dispatch(categoryActions.setGetCategories(data.data))
        } catch (error) {
            alert(error.response.data.errors[0].msg)
            dispatch(authActions.clearLoading())
        }
    }
}