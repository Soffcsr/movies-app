import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: []
    },
    reducers: (state) => {
        add: (state, action) => {
           state.movies =  action.payload
        }
    }
})

export const { add } = moviesSlice.actions

export default moviesSlice.reducer