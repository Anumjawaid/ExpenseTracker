import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StateBox from '../components/Statebox';
export default function AppRouter() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<StateBox />}></Route>
                </Routes>
            </Router>
        </>
    )
}