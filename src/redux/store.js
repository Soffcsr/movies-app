import { configureStore } from '@reduxjs/toolkit'
import moviesreducer from './reducers/moviesSlice'

export default configureStore({
  reducer: {
    movies: moviesreducer
  },
})