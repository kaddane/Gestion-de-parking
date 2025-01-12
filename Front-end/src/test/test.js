





import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export default function Test() {

    const [data, setData] = useState([])

    const [add, setAdd] = useState({
        name : "",
        lastname : "",
        email : "",
        password : ""
    })

    useEffect(()=>{
        axios.get("http://localhost:8800/admin")
        .then(res => setData(res.data))    
    }, [])

    function handerSubmit(ev){
        ev.preventDefault()
        axios.post("http://localhost:8800/admin", add)
    }

    function handerChange(ev){
        setAdd({...add, [ev.target.name]: ev.target.value})
        
    }

    function deleteFn(idAdmin){
        axios.delete("http://localhost:8800/admin/" + idAdmin)
    }


  return (
    <div>
        <h1>adddddddddddd</h1>
        <form onSubmit={ev => handerSubmit(ev)}>
            <input type='text' name='name' onChange={ev=> handerChange(ev)} />
            <input type='text' name='lastname' onChange={ev=> handerChange(ev)} />
            <input type='email' name='email' onChange={ev=> handerChange(ev)} />
            <input type='password' name='password' onChange={ev=> handerChange(ev)} />
            <input type='submit' value="click" />
        </form>

        <h1>adddddddddddd</h1>

        <ul>
            {data.map(ad=> {
                return(
                    <div key={ad.idAdmin}>
                        <li> {ad.idAdmin} </li>
                        <li> {ad.nameA} </li>
                        <li> {ad.lastnameA} </li>
                        <li> {ad.emailA} </li>
                        <li> {ad.passwordA} </li>
                        <button onClick={()=>deleteFn(ad.idAdmin)} > click DELETE</button>
                        <button><Link to={`./Update/${ad.idAdmin}`} >click UPDATE</Link> </button>
                    </div>
                )
            })}
        </ul>

    </div>
  )
}




