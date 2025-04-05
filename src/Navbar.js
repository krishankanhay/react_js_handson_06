import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='links'>
                <NavLink className="link" to='/home'
                    style={({ isActive }) => {
                        return isActive ? { color: "orange" } : { color: "white" };
                    }}
                >Home</NavLink>
                <NavLink className="link" to='/student'
                    style={({ isActive }) => {
                        return isActive ? { color: "orange" } : { color: "white" };
                    }}
                >Students</NavLink>
                <NavLink className="link" to='/contact'
                    style={({ isActive }) => {
                        return isActive ? { color: "orange" } : { color: "white" };
                    }}
                >Contact US</NavLink>
            </div>
        </>
    )
}

export default Navbar
