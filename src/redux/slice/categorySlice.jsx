import { createSlice } from "@reduxjs/toolkit";


const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories:[],
    loading: false,
    messageCreate : null
  },
  reducers: {
    setCategories(state,action){
        state.messageCreate = action.payload
    },
    setGetCategories(state,action){
      state.categories = action.payload
    }
  }
})

const categoryActions = categorySlice.actions
const categoryReducers = categorySlice.reducer

export {
  categoryActions, categoryReducers
}