import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Student from '../Components/Student'
import Contact from '../Components/Contact'
import NotFound from '../Components/NotFound'
import ContextData from '../Components/ContextData'
import Table from '../Components/Table'
import Addnew from '../Components/Addnew'
import Edit from '../Components/Edit'

const RouteCompo = () => {
    const [data, setData] = useState([         // using axios
        { name: "Shubham", age: 25, course: "MERN", batch: "November" },
        { name: "Kunal", age: 27, course: "MERN", batch: "October" },
        { name: "Monu", age: 26, course: "MERN", batch: "October" },
        { name: "Biden", age: 26, course: "MERN", batch: "September" },
        { name: "Barar", age: 22, course: "MERN", batch: "September" },
        { name: "Christ", age: 23, course: "MERN", batch: "October" },
        { name: "Sonu", age: 24, course: "MERN", batch: "November" },
    ], [])

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/student' element={
                        <ContextData.Provider value={{ entries: data, UpdateFun: setData }}>
                            <Student />
                            <Table />
                        </ContextData.Provider>
                    } />
                    <Route path='/addnew' element={
                        <ContextData.Provider value={{ entries: data, UpdateFun: setData }}>
                            <Addnew />
                        </ContextData.Provider>
                    } />
                    <Route path='/edit' element={
                        <ContextData.Provider value={{ entries: data, UpdateFun: setData }}>
                            <Edit />
                        </ContextData.Provider>
                    } />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouteCompo
