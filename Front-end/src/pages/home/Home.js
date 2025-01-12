
import './Home.css'



import { FaUserAlt } from "react-icons/fa";
import { GiBallPyramid } from "react-icons/gi";
import { MdCalendarMonth } from "react-icons/md";

import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";



import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Home({ sidebar }) {

  const [reservation, setReservation] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8800/reservation')
        .then(res => setReservation((res.data).reverse()));
}, []);


function isSixMonthsDifference(startDate, comparedDate, month) {
    let number = 0;
    const diffMonths = (comparedDate.getFullYear() - startDate.getFullYear()) * 12 +
        (comparedDate.getMonth() - startDate.getMonth());
    if (diffMonths === month) {
        number += 1;
    }
    return number;
}


const month6Count = reservation.reduce((count, res) => count + isSixMonthsDifference(new Date(res.dateRI), new Date(res.dateR), 6), 0);
const month12Count = reservation.reduce((count, res) => count + isSixMonthsDifference(new Date(res.dateRI), new Date(res.dateR), 12), 0);

  return (
    <div className='home'>
      <h1 className='all-title' >Admin Dashboard</h1>
      <div className='list-home'>
        <div className='list-action'>
          <FaUserAlt className='list-action-icon' />
          <div className='number-of'>
            <p className='number-text'>number of reservation</p>
            <p className='number'> {reservation.length} </p>
          </div>
        </div>


        <div className='list-action'>
          <MdCalendarMonth className='list-action-icon' />
          <div className='number-of'>
            <p className='number-text'>reservation 6 month</p>
            <p className='number'> {month6Count} </p>
          </div>
        </div>

        <div className='list-action'>
          <GiBallPyramid className='list-action-icon' />
          <div className='number-of'>
            <p className='number-text'>reservation 1 year</p>
            <p className='number'> {month12Count} </p>
          </div>
        </div>
      </div>

      <div className='reservation-list'>
        <div className='cader-reservation'>
          <h1 className='all-title'>The Last Reservation On The System</h1>
          <hr className='hr' />
        <table className="table">
          <thead>
            <tr className='p-2'>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Lastname</th>
              <th scope="col">Cin</th>
              <th scope="col">place Number</th>
              <th scope="col">Matrecule</th>
              <th scope="col">Date</th>
              <th scope="col">Module Car</th>
            </tr>
          </thead>
          <tbody>
            {reservation.map(res => {
              return(
                <tr>
                  <th scope="row">{res.idR}</th>
                  <td>{res.nameUser}</td>
                  <td>{res.lastnameUser}</td>
                  <td>{res.cinUser}</td>
                  <td>{res.num_place}</td>
                  <td>{res.matreculeCar}</td>
                  <td>{(res.dateR).slice(0, 10)} <span className='date-end'> {new Date() <= new Date(res.dateR) ? <FaCheckCircle style={{color : "green"}} /> : <FaTimesCircle style={{color : "red"}} /> } </span> </td>
                  <td>{res.moduleCar}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}





