


import "./sidebar.css"

import { MdDashboard } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";



import React from 'react'
import { Link } from "react-router-dom";

export default function Sidebar({ sidebar }) {
    const style = { textDecoration: 'none', color: "#f9f9f9" }
    return (
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className="sortcut-links">
                <div className="side-link">
                    <Link to="/" style={style} ><MdDashboard className="side-icon" /></Link>
                    <Link to="/" style={style} ><p>Home</p></Link>
                </div>
                <div className="side-link">
                    <Link to="/Parking" style={style} ><FaParking className="side-icon" /></Link>
                    <Link to="/Parking" style={style} ><p>Parking</p></Link>
                </div>
                <div className="side-link">
                    <Link to="/Reservation" style={style} ><FaAddressCard className="side-icon" /></Link>
                    <Link to="/Reservation" style={style} ><p>Reservation</p></Link>
                </div>
            </div>
        </div>
    )
}






































