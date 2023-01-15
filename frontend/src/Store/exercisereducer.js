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

export const addActivity = createAsyncThunk("exce/addActivity", async (data, thunkApi) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const res = await fetch('https://coder-io-exercisetracker.vercel.app/addactivity', requestOptions)
    return res.json();

})
export const updateActivity = createAsyncThunk("exce/update", async (data, thunkApi) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const res = await fetch(`https://coder-io-exercisetracker.vercel.app/updateactivity`, requestOptions)
    return res.json();

});

export const deleteActivity = createAsyncThunk("exce/delete", async (data, thunkApi) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const res = await fetch(`https://coder-io-exercisetracker.vercel.app/deleteactivity`, requestOptions)
    return res.json();

})
export const deleteAll = createAsyncThunk("exce/del", async (data, thunkApi) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const res = await fetch(`https://coder-io-exercisetracker.vercel.app/deleteall`, requestOptions)
    return res.json();

})

export const getactivities = createAsyncThunk("exce/get", async () => {
    
    const res = await fetch(`https://coder-io-exercisetracker.vercel.app/getactivities`);
    return res.json();

})

const exerciseSlice = createSlice({
    name: 'exercise',
    initialState,
    reducers: {},
    extraReducers: {
        [addActivity.fulfilled]: (state, action) => {
            state.response = action.payload.message
            alert(action.payload.message);
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
