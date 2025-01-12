


import React from 'react'
import Sidebar from '../sidebar/sidebar'
import Navbar from '../navbar/Navbar'

export default function NavSidebar({sidebar, setSidebar}) {
  return (
    <div>
        <Navbar setSidebar={setSidebar}/>
        <Sidebar sidebar={sidebar} />
    </div>
  )
}




































