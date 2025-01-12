

import axios from 'axios'
import './Parking.css'
// import parking_img from "../../img/parking.jpg"

import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { IoClose } from "react-icons/io5";



import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Parking({ sidebar }) {

  const [vuAdd, setVuAdd] = useState(false)

  const [parking, setParking] = useState([])

  const [park, setPark] = useState({
    nameP: "",
    addressP: "",
    placeP: ""
  })

  useEffect(() => {
    axios.get("http://localhost:8800/parking")
      .then(res => setParking(res.data))
  }, [])

  function handerSubmit(ev, add) {
    ev.preventDefault()
    axios.post("http://localhost:8800/parking", add)
    window.location.reload()
    setVuAdd(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPark({ ...park, [name]: value });
  };

  function deletePark(idpark) {
    axios.delete("http://localhost:8800/parking/" + idpark)
    window.location.reload()
  }
  


  return (
    <div className='parking'>
      <h1 className='all-title' >Management Parkings</h1>
      
      <div className={vuAdd ? "cader-form vuadd" : "cader-form"}>
        <div className='title-form'>
          <h1 className='all-title'>Add Parking</h1>
          <button className='cloes-icon' onClick={()=> setVuAdd(false)}><IoClose /></button>
        </div>
        <hr className='hr' />
        <form className='form-controll' onSubmit={ev => handerSubmit(ev, park)}>
          <label htmlFor='namePark' className='label'>Name Parking :</label>
          <input type='text' className='add-form' name='name' id='namePark' placeholder='Name Parking' onChange={handleInputChange} />
          <label htmlFor='addressPark' className='label'>Address :</label>
          <input type='text' className='add-form' name='address' id='addressPark' placeholder='Address' onChange={handleInputChange} />
          <label htmlFor='placePark' className='label'>Nubmer Place :</label>
          <input type='number' className='add-form' name='place' id='placePark' placeholder='Nubmer Place' onChange={handleInputChange} />
          <div className='flex-end'>
            <input type='submit' className='submit-add' value='Add' />
          </div>
        </form>
      </div>


      <div className='cader'>
        <div className='add-park'>
          <button className='btn-add' onClick={()=> setVuAdd(true)}>Add Park</button>
        </div>

        <table className="table">
          <thead>
            <tr className='p-2'>
              <th scope="col">#</th>
              <th scope="col">Name Parking</th>
              <th scope="col">Address</th>
              <th scope="col">Nubmer Place</th>
              <th scope="col">processes</th>
            </tr>
          </thead>
          <tbody>
            {parking.map(park => {
              return (
                <tr key={park.idpark}>
                  <th scope="row">{park.idpark}</th>
                  <td>{park.nameP}</td>
                  <td>{park.addressP}</td>
                  <td>{park.placeP}</td>
                  <td >
                    <button className='processes processes-ubdate'><Link style={{color : "#fff"}} to={`/UpdatePark/${park.idpark}`}><FaPenToSquare /></Link></button>
                    <button className='processes processes-delete' onClick={()=>deletePark(park.idpark)}><MdDelete /></button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}










/* <div className='parkings'>
    <div className='parking-ifo'>
      <img src={parking_img} alt='park' />
      <p className='park-address'>hello, n16, laayoune</p>
      <p className='park-number'>100</p>
      <button className='btn-delete'>Delete</button>
      <button className='btn-ubdtate'>Ubdate</button>
    </div>
</div> */







