

import './adminLogin.css'
import axios from 'axios'
import loginAdmin from "../../FNJS.js/function" 


import React, { useState, useEffect } from 'react'

export default function AdmonLogn({setLoginAdmin}) {

    const [admin, setAdmin] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8800/admin")
          .then(res => setAdmin(res.data))
    }, [])
    

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const handleInputChangeLognIn = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    };
    

    function handerSubmit(ev) {
      const myAamin = admin.find(ad => ad.emailA=== login.email && ad.passwordA === login.password )
      if(!myAamin){
          ev.preventDefault()
          setError(true)
          setTimeout(() => {
            setError(false)
          }, 10000);
        }else{
            loginAdmin(false)
            setError(false)
        }
    }


    return (
        <div className='login'>
            {error ? <div className="alert alert-danger error">
                <strong>error!</strong> email or password incorrect.
            </div>: ""}
            <div className='lign-flex'>
                <div className="cader-login">
                    <div className='title-form'>
                        <h1 className='all-title'>Login</h1>
                    </div>
                    <form className='form-controll' onSubmit={(ev) => handerSubmit(ev)}>
                        <label htmlFor='email' className='label'>User Name :</label>
                        <input type='text' className='input-login' name='email' id='email' placeholder='email' onChange={handleInputChangeLognIn} />
                        <label htmlFor='addressPark' className='label'>password :</label>
                        <input type='password' className='input-login' name='password' id='password' placeholder='password' onChange={handleInputChangeLognIn} />
                        <div className='flex-end'>
                            <input type='submit' className='submit-add' value='Login' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


































