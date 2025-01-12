
import './Navbar.css'
import logo from "../../img/logo2.png"
import user from "../../img/user-icon.png"

// ---- icons ---
import { CiMenuBurger } from "react-icons/ci";



import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({setSidebar}) {

  return (
    <div className='flex-div nav'>
        <div className='nav-left flex-div'>
          <div className='logo-height'>
          <Link to="/" ><img src={logo} className='logo' alt='logo' /> </Link>
          </div>
          <CiMenuBurger className='menu-icon' onClick={()=> setSidebar(prev=>prev===false?true:false)} />
        </div>
        <div className='nav-right flex-div'>
          <p className='admin-text'>Welcom, Admin</p>
          <Link to="/AdminPage"> <img src={user} alt='admin' className='user-icon' /> </Link>
        </div>
    </div>
  )
}





 