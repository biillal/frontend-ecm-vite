import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: localStorage.getItem("userEcm") ? JSON.parse(localStorage.getItem("userEcm")) : null,
    registerMessage: null,
    isverified: false,
    loading: false,
    isEmailVerified: false
  },
  reducers: {
    login(state, action) {
      state.isverified = true
      state.user = action.payload
      state.loading = false
    },
    register(state, action) {
      state.isverified = true
      state.user = action.payload
      state.loading = false
    },
    setLoading(state, action) {
      state.loading = true
    },
    clearLoading(state, action) {
      state.loading = false
    },
    logout(state, action) {

    },
  }
})

const authActions = authSlice.actions
const authReducers = authSlice.reducer

export {
  authActions, authReducers
}