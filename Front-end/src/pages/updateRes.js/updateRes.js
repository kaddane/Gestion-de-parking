

import "./updateRes.css"



import { IoClose } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";


import React, {useEffect, useState} from 'react'
import axios from 'axios'
// import { useParams } from 'react-router'



export default function UpdateRes() {

    const [reservation, setReservation] = useState([]);
  const [moduls, setModuls] = useState([]);
  

  const navigate = useNavigate();
  const location = useLocation();
  const idR = location.pathname.split("/")[2];

  const [error, setError] = useState(false);
  const [reserve, setReserve] = useState({
    cinUser: "",
    nameUser: "",
    lastnameUser: "",
    matreculeCar: "",
    num_place: "",
    moduleCar: "",
    dateR: "",
    dateRI: ""
  });

  useEffect(() => {
    axios.get("http://localhost:8800/reservation")
      .then(res => setReservation(res.data))

    axios.get("http://localhost:8800/modeles")
      .then(res => setModuls(res.data))

  }, []);

  console.log(reservation)


  useEffect(() => {
    const selectedReservation = reservation.find(res => res.idR === parseInt(idR));

    if (selectedReservation) {
      setReserve({
        cinUser: selectedReservation.cinUser,
        nameUser: selectedReservation.nameUser,
        lastnameUser: selectedReservation.lastnameUser,
        matreculeCar: selectedReservation.matreculeCar,
        num_place: selectedReservation.num_place,
        moduleCar: selectedReservation.moduleCar,
        dateR: selectedReservation.dateR,
        dateRI: selectedReservation.dateRI
      });
    }
    console.log(selectedReservation)

  }, [idR, reservation]);


    function updateReservation(ev, update) {
      const degaReserve = reservation.find(re => re.num_place === parseInt(reserve.num_place))
      if(degaReserve && !reserve.num_place){
        ev.preventDefault()
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 2000);
      }else{
        ev.preventDefault()
        axios.put("http://localhost:8800/reservation/"+ idR , update)
        setError(false)
        navigate("/Reservation")
        window.location.reload()
      }
    }
    
    const handleInputChangeRservation = (e) => {
      const { name, value } = e.target;
      setReserve({ ...reserve, [name]: value });
    };

    console.log(reserve)
  
  
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
        <div className="update-reservation">
            <h1 className='all-title' >Management Reservation</h1>

            <div className="forms">
                {error ? <div className="alert alert-danger">
                    <strong>place!</strong> deja reserve.
                </div> : ""}
                <div className='title-form'>
                    <h1 className='all-title'>Update Reservation</h1>
                    <button className='cloes-icon' onClick={()=> navigate("/Reservation")}><IoClose /></button>
                </div>
                <hr className='hr' />
                <form onSubmit={ev => updateReservation(ev, reserve)}>
                    <div className='form-flex'>
                        <div className='form-pakege'>
                            <label htmlFor='nameUser' className='label'>Name :</label>
                            <input type='text' className='add-form' name='nameUser' id='nameUser' value={reserve.nameUser} onChange={handleInputChangeRservation} />
                        </div>
                        <div className='form-pakege'>
                            <label htmlFor='lastnameUser' className='label'>Last Name :</label>
                            <input type='text' className='add-form' name='lastnameUser' id='lastnameUser' value={reserve.lastnameUser} onChange={handleInputChangeRservation} />
                        </div>
                    </div>
                    <div className='form-flex'>
                        <div className='form-pakege'>
                            <label htmlFor='cinUser' className='label'>Cin :</label>
                            <input type='text' className='add-form' name='cinUser' id='cinUser' value={reserve.cinUser} onChange={handleInputChangeRservation} />
                        </div>
                        <div className='form-pakege'>
                            <label htmlFor='matreculeCar' className='label'>Matrecule Car :</label>
                            <input type='text' className='add-form' name='matreculeCar' id='matreculeCar' value={reserve.matreculeCar} onChange={handleInputChangeRservation} />
                        </div>
                    </div>
                    <div className='form-flex'>
                        <div className='form-pakege'>
                            <label htmlFor='num_place' className='label'>Number Place :</label>
                            <input type='text' className='add-form' name='num_place' id='num_place' value={reserve.num_place} onChange={handleInputChangeRservation} />
                        </div>
                        <div className='form-pakege'>
                            <label htmlFor='dateR' className='label'>date Reservation :</label>
                            <select className='add-form' name='dateR' id='dateR' value={reserve.dateR} onChange={handleInputChangeRservation}>
                                <option value="">DATA</option>
                                <option value={SixMonth}>6 Month</option>
                                <option value={OneYear}>1 year</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-flex'>
                        <div className='form-pakege'>
                            <label htmlFor='moduleCar' className='label'>ModuleCar Car :</label>
                            <select className='add-form' name='moduleCar' id='moduleCar' value={reserve.moduleCar} onChange={handleInputChangeRservation}>
                                {moduls.map(mo => {
                                    return (
                                        <option key={mo.idM} value={mo.nameM}>{mo.nameM}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='flex-end-btn'>
                            <input type='submit' className='submit-add-btn' value='Update' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

























