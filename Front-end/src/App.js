
import './App.css';
import 'bootstrap//dist/css/bootstrap.min.css'

// import Navbar from "./pages/navbar/Navbar"
import Home from "./pages/home/Home"
import Parking from "./pages/parking/Parking"
import Reservation from "./pages/reservation/Reservation"
import UpdateRes from './pages/updateRes.js/updateRes';
import AdmonLogn from './pages/adminLogin/AdmonLogn';
import AdminPage from './pages/adminPage/adminPage';
import UpdatePark from './pages/updatePark/updatePark';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Test from './test/test';
// import Update from './test/update';
import { useState, useEffect } from 'react';

import NavSidebar from './pages/navSidebar/navSidebar';





function App() {

  const [sidebar, setSidebar] = useState(true)
  const [loginAdmin, setLoginAdmin] = useState(false) 

  useEffect(()=>{
    const getItemValue = JSON.parse(localStorage.getItem("login"))
    if(getItemValue){
      setLoginAdmin(true)
    }
  },[])



  return (
    <div>

      <BrowserRouter>
        {loginAdmin && <NavSidebar setSidebar={setSidebar} sidebar={sidebar} />}
        <div className={`container-all ${sidebar ? "" : "large-container"}`}>
          <Routes>
            {!loginAdmin && <Route path="/" element={<AdmonLogn setLoginAdmin={setLoginAdmin} loginAdmin={loginAdmin} />} />}
            {loginAdmin && <Route path="/" element={<Home sidebar={sidebar} />} />}
            {/* <Route path="/" element={<Test/>} />
            <Route path="/Update/:adminID" element={<Update/>} /> */}
            {loginAdmin && <Route path="/Parking" element={<Parking />} />}
            {loginAdmin && <Route path="/UpdatePark/:idpark" element={<UpdatePark />} />}
            {loginAdmin && <Route path="/Reservation" element={<Reservation />} />}
            {loginAdmin && <Route path="/updateRes/:idR" element={<UpdateRes />} />}
            {loginAdmin && <Route path="/AdminPage" element={<AdminPage />} />}
          </Routes>
        </div>

      </BrowserRouter>

    </div>
  );
}

export default App;







