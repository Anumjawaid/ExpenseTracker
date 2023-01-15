import { configureStore } from '@reduxjs/toolkit'
import  exerciseSlice  from './exercisereducer'

export default configureStore({
  reducer: {
    exercise: exerciseSlice
  }
})