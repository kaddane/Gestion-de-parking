

import './updatePark.css'

import { IoClose } from "react-icons/io5";



import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";


export default function UpdatePark() {

    const [parking, setParking] = useState([])

    const navigate = useNavigate();
    const location = useLocation();
    const idpark = location.pathname.split("/")[2];

  const [park, setPark] = useState({
    nameP: "",
    addressP: "",
    placeP: ""
  })

  useEffect(() => {
    axios.get("http://localhost:8800/parking")
      .then(res => setParking(res.data))
  }, [])

  function updateParking(ev, ubdate) {
    ev.preventDefault()
    axios.put("http://localhost:8800/parking/" + idpark, ubdate)
    navigate("/parking")
    window.location.reload()
  }
  
  useEffect(() => {
    const selectedPark = parking.find(res => res.idpark === parseInt(idpark));

    if (selectedPark) {
        setPark({
        nameP: selectedPark.nameP,
        addressP: selectedPark.addressP,
        placeP: selectedPark.placeP,
      });
    }
  }, [idpark, parking]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPark({ ...park, [name]: value });
  };

  return (
    <div className='updatePark'>
    
      <div className="cader-form-update">
        <div className='title-form'>
          <h1 className='all-title'>Update Parking</h1>
          <button className='cloes-icon' onClick={()=> navigate("/Parking")}><IoClose /></button>
        </div>
        <hr className='hr' />
        <form className='form-controll' onSubmit={ev => updateParking(ev, park)}>
          <label htmlFor='namePark' className='label'>Name Parking :</label>
          <input type='text' className='add-form' name='nameP' id='namePark' value={park.nameP} onChange={handleInputChange} />
          <label htmlFor='addressPark' className='label'>Address :</label>
          <input type='text' className='add-form' name='addressP' id='addressPark' value={park.addressP} onChange={handleInputChange} />
          <label htmlFor='placePark' className='label'>Nubmer Place :</label>
          <input type='number' className='add-form' name='placeP' id='placePark' value={park.placeP} onChange={handleInputChange} />
          <div className='flex-end'>
            <input type='submit' className='submit-add' value='Update' />
          </div>
        </form>
      </div>
    </div>
  )
}


































