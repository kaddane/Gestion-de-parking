

import './Reservation.css'
import { IoClose } from "react-icons/io5";
import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";



import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export default function Reservation() {
  
  const [addForm, setAddForm] = useState(false)
  const [error, setError] = useState("")

  const [search, setSearch] = useState("")

  const [reservation, setReservation] = useState([])
  const [moduls, setModuls] = useState([])
  const [parkings, setParkings] = useState([])

                        

  const [reserve, setReserve] = useState({
    cinUser: "",
    nameUser: "",
    lastnameUser: "",
    matreculeCar: "",
    num_place: "",
    moduleCar: "",
    dateR: "",
    dateRI: new Date().toISOString().slice(0, 10)
  })

 

  useEffect(() => {
    axios.get("http://localhost:8800/reservation")
      .then(res => setReservation(res.data))

    axios.get("http://localhost:8800/modeles")
      .then(res => setModuls(res.data))

    axios.get("http://localhost:8800/parking")
      .then(res => setParkings(res.data))
  }, [])

  const handleInputChangeRservation = (e) => {
    const { name, value } = e.target;
    setReserve({ ...reserve, [name]: value });
  };

  function addReservation(ev, add) {
    const degaReserve = reservation.find(re => re.num_place === parseInt(reserve.num_place)) 
    const prNumber = reserve.num_place > parseInt(parkings[0].placeP)
    if(degaReserve){
      ev.preventDefault()
      setError("degaReserve")
      setTimeout(() => {
        setError("")
      }, 2000);
    }else if(prNumber){
      ev.preventDefault()
      setError("prNumber")
      setTimeout(() => {
        setError("")
      }, 2000);
    } else if(!reserve.cinUser || !reserve.nameUser || !reserve.lastnameUser || !reserve.matreculeCar || !reserve.num_place || !reserve.moduleCar || !reserve.dateR){
      ev.preventDefault()
      setError("none")
      setTimeout(() => {
        setError("")
      }, 2000);
    } else {
      ev.preventDefault()
      axios.post("http://localhost:8800/reservation", add)
      window.location.reload()
      setAddForm(false)
      setError(false)
      setReserve("")
    }
  }

  function deleteReservation(idR) {
    axios.delete("http://localhost:8800/reservation/" + idR)
    window.location.reload()
  }


  function addMonths(date, months) {
    var d = date.getDate();
    date.setMonth(date.getMonth() + +months);
    if (date.getDate() !== d) {
      date.setDate(0);
    }
    return date;
  }
  const SixMonth =  addMonths(new Date(), 6).toISOString().slice(0, 10)
  const OneYear =  addMonths(new Date(), 12).toISOString().slice(0, 10)



  return (
    <div className='reservation'>
      <h1 className='all-title' >Management Reservation</h1>

      <div className={addForm ? "forms" : "forms addform"}>
        {error === "degaReserve" ? <div className="alert alert-danger">
          <strong>Place!</strong> Deja Reserve.
        </div>: ""}
        {error === "prNumber" ? <div className="alert alert-danger">
          <strong>Place!</strong> Undefined.
        </div>: ""}
        {error === "none" ? <div className="alert alert-danger">
          <strong>Inputs!</strong> complete all inputs.
        </div>: ""}
        <div className='title-form'>
          <h1 className='all-title'>Add Reservation</h1>
          <button className='cloes-icon' onClick={()=> setAddForm(false)}><IoClose /></button>
        </div>
        <hr className='hr' />
        <form onSubmit={ev => addReservation(ev, reserve)}>
          <div className='form-flex'>
            <div className='form-pakege'>
              <label htmlFor='nameUser' className='label'>Name :</label>
              <input type='text' className='add-form' name='nameUser' id='nameUser' onChange={ev => handleInputChangeRservation(ev)} />
            </div>
            <div className='form-pakege'>
              <label htmlFor='lastnameUser' className='label'>Last Name :</label>
              <input type='text' className='add-form' name='lastnameUser' id='lastnameUser' onChange={ev => handleInputChangeRservation(ev)} />
            </div>
          </div>
          <div className='form-flex'>
            <div className='form-pakege'>
              <label htmlFor='cinUser' className='label'>Cin :</label>
              <input type='text' className='add-form' name='cinUser' id='cinUser' onChange={ev => handleInputChangeRservation(ev)} />
            </div>
            <div className='form-pakege'>
              <label htmlFor='matreculeCar' className='label'>Matrecule Car :</label>
              <input type='text' className='add-form' name='matreculeCar' id='matreculeCar' onChange={ev => handleInputChangeRservation(ev)} />
            </div>
          </div>
          <div className='form-flex'>
            <div className='form-pakege'>
              <label htmlFor='num_place' className='label'>Number Place :</label>
              <input type='text' className='add-form' name='num_place' id='num_place' onChange={ev => handleInputChangeRservation(ev)} />
            </div>
            <div className='form-pakege'>
              <label htmlFor='dateR' className='label'>date Reservation :</label>
              <select className='add-form' name='dateR' id='dateR' onChange={ev => handleInputChangeRservation(ev)}>
                <option value="">DATA</option>
                <option value={SixMonth}>6 Month</option>
                <option value={OneYear}>1 year</option>
                <option value={"2024-02-26"}>-1</option>
              </select>
            </div>
          </div>
          <div className='form-flex'>
            <div className='form-pakege'>
              <label htmlFor='moduleCar' className='label'>ModuleCar Car :</label>
              <select className='add-form' name='moduleCar' id='moduleCar' onChange={ev => handleInputChangeRservation(ev)}>
                {moduls.map(mo => {
                  return (
                    <option key={mo.idM} value={mo.nameM}>{mo.nameM}</option>
                  )
                })}
              </select>
            </div>
            <div className='flex-end-btn'>
              <input type='submit' className='submit-add-btn' value='Add' />
            </div>
          </div>
        </form>
      </div>

      <div className='cader'>
        <div className='add-park margin-res'>
          <button className='btn-add' onClick={()=> setAddForm(true)}>Add Reservation</button>
          <div className='search-section'>
              <input type='text' className='search' placeholder='Search By Cin, Matrecule' value={search} onChange={(ev) => setSearch(ev.target.value)} />
          </div>
        </div>

        <table className="table-reservation">
          <thead>
            <tr className='p-2'>
              <th scope="col">#</th>
              <th scope="col">cin</th>
              <th scope="col">name</th>
              <th scope="col">lastName</th>
              <th scope="col">matrecule</th>
              <th scope="col">place</th>
              <th scope="col">module</th>
              <th scope="col">date</th>
              <th scope="col">processes</th>
            </tr>
          </thead>
          <tbody>
            {(reservation.filter(res =>
                res.matreculeCar.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||res.cinUser.toLocaleLowerCase().includes(search.toLocaleLowerCase())
              )).map(res => {
              return (
                <tr key={res.idR}>
                  <th scope="row">{res.idR}</th>
                  <td>{res.cinUser}</td>
                  <td>{res.nameUser}</td>
                  <td>{res.lastnameUser}</td>
                  <td>{res.matreculeCar}</td>
                  <td>{res.num_place}</td>
                  <td>{res.moduleCar}</td>
                  <td>{(res.dateR).slice(0, 10)} <span className='date-end'> {new Date() <= new Date(res.dateR) ? <FaCheckCircle style={{color : "green"}} /> : <FaTimesCircle style={{color : "red"}} /> } </span> </td>
                  <td >
                    <button className='processes processes-ubdate' > <Link style={{color:'#fff'}} to={`/updateRes/${res.idR}`}> <FaPenToSquare /> </Link></button>
                    <button className='processes processes-delete' onClick={()=> deleteReservation(res.idR)} ><MdDelete /></button>
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



// onClick={ev=> setUpdateValue(...updateValue, res.cinUser, res.nameUser, res.lastnameUser, res.matreculeCar, res.num_place, res.moduleCar, res.dateR)}















// <table className="table">
//   <thead>
//     <tr className='p-2'>
//       <th scope="col">#</th>
//       <th scope="col">moduleCar</th>
//       <th scope="col">dateR</th>
//       <th scope="col">matreculeCar</th>
//       <th scope="col">num_place</th>
//       <th scope="col">nameUser</th>
//       <th scope="col">cinUser</th>
//       <th scope="col">lastnameUser</th>
//       <th scope="col">processes</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">park.idpark</th>
//       <td>park.moduleCar</td>
//       <td>park.dateR</td>
//       <td>park.matreculeCar</td>
//       <td>park.num_place</td>
//       <td>park.nameUser</td>
//       <td>park.cinUser</td>
//       <td>park.lastnameUser</td>
//       <td >
//         <button className='processes processes-ubdate'><FaPenToSquare /></button>
//         <button className='processes processes-delete' ><MdDelete /></button>
//       </td>
//     </tr>
//   </tbody>
// </table>