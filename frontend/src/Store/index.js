import { configureStore } from '@reduxjs/toolkit'
import  excerciseSlice  from './excercisereducer'

export default configureStore({
  reducer: {
    exce: excerciseSlice
  },
})