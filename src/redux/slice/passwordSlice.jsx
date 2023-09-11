import { createSlice } from "@reduxjs/toolkit";


const passwordSlice = createSlice({
  name: 'Password',
  initialState: {
    loading: false,
    isError :false
  },
  reducers: {
    setLoading(state, action) {
        state.loading = true
      },
      clearLoading(state, action) {
        state.loading = false
      },
      setError(state){
        state.isError = true
      }
  }
})

const passwordActions = passwordSlice.actions
const passwordReducers = passwordSlice.reducer

export {
  passwordActions, passwordReducers
}