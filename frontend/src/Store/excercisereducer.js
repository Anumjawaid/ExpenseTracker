import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    excercise:[{
        name:"",
        duration:"",
        time:"",
        description:"",
        type:"",
        id:""
    }],
    responses:""
}

export const AddExcercise=createAsyncThunk(
    "exce/add",
    async(data,thunkApi)=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const res = await fetch('http://localhost:3001/add',requestOptions)
        // console.log(res,"response")
        return res.json();
    
})
export const updateExcercise=createAsyncThunk(
    "exce/add",
    async(data,thunkApi)=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const res = await fetch(`http://localhost:3001/update:${data.id}`,requestOptions)
        // console.log(res,"response")
        return res.json();
    
})

export const excerciseSlice=createSlice({
    name:'exce',
    initialState,
    reducers:{

    },
    extrareducers:{

    }
})