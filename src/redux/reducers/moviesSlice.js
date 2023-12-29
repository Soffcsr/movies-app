import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPopularMovies = createAsyncThunk('movies/fetchPopularMovies', async (page) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=24983e85f00f86fe5580319212bd1224&language=en-US&page=${page}`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
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
        page: 1,
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
                state.movies = action.payload.results;
                state.page = action.payload.page;
            })
            .addCase(fetchPopularMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export default moviesSlice.reducer