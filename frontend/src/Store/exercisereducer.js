import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    exercise: [{
        name: "",
        duration: "",
        time: "",
        description: "",
        activityType: "",
        _id: ""
    }],
    response: ""
}

export const addActivity = createAsyncThunk(
    "exce/addActivity",
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const res = await fetch('http://localhost:3001/addactivity', requestOptions)
        return res.json();

    })
export const updateActivity = createAsyncThunk(
    "exce/update",
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const res = await fetch(`http://localhost:3001/updateactivity`, requestOptions)
        return res.json();

    });

export const deleteActivity = createAsyncThunk(
    "exce/delete",
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const res = await fetch(`http://localhost:3001/deleteactivity`, requestOptions)
        return res.json();

    })
export const deleteAll = createAsyncThunk(
    "exce/update",
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const res = await fetch(`http://localhost:3001/deleteall`, requestOptions)
        return res.json();

    })

export const getactivities = createAsyncThunk(
    "exce/get",
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const res = await fetch(`http://localhost:3001/getactivities`, requestOptions)
        return res.json();

    })

const exerciseSlice = createSlice({
    name: 'exce',
    initialState,
    reducers: {

    },
    extrareducers: {
        [addActivity.pending]: () => {
            console.log('pending');
        },
        [addActivity.fulfilled]: (state, action) => {
            state.response = action.payload.message
            console.log("helo" + action.payload.message);
        },
        [updateActivity.fulfilled]: (state, action) => {
            state.response = action.payload.message
        },
        [deleteActivity.fulfilled]: (state, action) => {
            state.response = action.payload.message
        },
        [deleteAll.fulfilled]: (state, action) => {
            state.response = action.payload.message
        },
        [getactivities.fulfilled]: (state, action) => {
            state.exercise = action.payload.data
        }
    }
});


export default exerciseSlice.reducer;
