import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPopularMovies = createAsyncThunk('movies/fetchPopularMovies', async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer 24983e85f00f86fe5580319212bd1224'
          }
    })
    const jsonData = await response.json();
    return jsonData;
})

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        loading: false,
        error: false,
    },
    reducers: (state) => {
        add: (state, action) => {
           state.movies =  action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularMovies.pending,  (state) => {
                state.loading = true;
            })
            .addCase(fetchPopularMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload
            })
            .addCase(fetchPopularMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
    }
})

//export const { add } = moviesSlice.actions

export default moviesSlice.reducer