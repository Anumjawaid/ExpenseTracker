import { configureStore } from '@reduxjs/toolkit'
import { excerciseSlice } from './excercisereducer'

export const store = configureStore({
  reducer: {
    exce: excerciseSlice.reducer
  },
})