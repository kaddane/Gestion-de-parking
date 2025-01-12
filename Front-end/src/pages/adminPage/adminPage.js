
import './adminPage.css'

import profile from '../../img/user-icon.png'
import { IoClose } from "react-icons/io5";


import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function AdminPage() {
    const [admin, setAdmin] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8800/admin")
            .then(res => setAdmin(res.data))
    }, [])




    const [changePassword, setChangePassword] = useState(false)
    const [adminProfile, setAdminProfile] = useState({})
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [errorChange, setErrorChange] = useState(false)

    // function getAll(){
    //     const myInfo = admin.find(por => por.idAdmin === 2)
    //     setName(myInfo.nameA)
    //     setLastName(myInfo.lastnameA)
    //     setEmail(myInfo.emailA)
    //     setPassword(myInfo.passwordA)
    // }

    // useEffect(()=>{
    //     getAll()
    // },[admin])


    // console.log(adminProfile)



    function change(ev, newPass) {
        ev.preventDefault()
        if (password1 === password2) {
            axios.put("http://localhost:8800/admin/" + adminProfile.idAdmin , newPass)
            window.location.reload()
        } else {
            setErrorChange(true)
            setTimeout(() => {
                setErrorChange(false)
            }, 2000);
        }
    }


    return (
        <div className='adminPage'>
            <h1 className='all-title' >Profile Admin</h1>

            <div className={changePassword ? "flex-change" : "flex-change d-none"}>
                {errorChange ? <div className="alert alert-danger">
                    <strong>place!</strong> deja reserve.
                </div> : ""}
                <div className="cader-change">
                    <div className='title-form'>
                        <h1 className='all-title'>Change Password</h1>
                        <button className='cloes-icon' onClick={() => setChangePassword(false)}><IoClose /></button>
                    </div>
                    <hr className='hr' />
                    <form className='form-controll' onSubmit={(ev) => change(ev, adminProfile)}>
                        <label htmlFor='passwordChange' className='label'>password :</label>
                        <input type='password' className='input' name='passwordChange' id='passwordChange' onChange={ev => setPassword1(ev.target.value)} />
                        <label htmlFor='Confirm_passwordA' className='label'>Confirm password :</label>
                        <input type='password' className='input' name='Confirm_passwordA' id='Confirm_passwordA' onChangeCapture={ev => setPassword2(ev.target.value)} onChange={ev => {admin.map(adm => {if(adm.idAdmin === 2){
                            return(
                                setAdminProfile({...adm, passwordA : password1})
                            )
                        }})}} />
                        <div className='flex-end'>
                            <input type='submit' className='submit-add' value='Change' />
                        </div>
                    </form>
                </div>
            </div>



            <div className='felx-profile'>
                <div className='cader-profile'>
                    <div className='img-profile'>
                        <img src={profile} alt='profile' />
                    </div>
                </div>
                <div className='cader-profile-form'>
                    <div className="from-profile">
                        <div className='title-form'>
                            <h1 className='all-title'>Admin information</h1>
                        </div>
                        <hr className='hr' />
                        {admin.filter(adm => adm.idAdmin === 2).map(adm => {
                            return (
                                <>
                                    <form className='form-controll' key={adm.idAdmin}>
                                        <label htmlFor='nameA' className='label'>Name :</label>
                                        <input type='text' className='input' name='nameA' id='nameA' value={adm.nameA} disabled="disabled" />
                                        <label htmlFor='lastnameA' className='label'>lastname :</label>
                                        <input type='text' className='input' name='address' id='lastnameA' value={adm.lastnameA} disabled="disabled" />
                                        <label htmlFor='emailA' className='label'>email :</label>
                                        <input type='text' className='input' name='place' id='emailA' value={adm.emailA} disabled="disabled" />
                                        <label htmlFor='passwordA' className='label'>password :</label>
                                        <input type='password' className='input' name='place' id='passwordA' value={adm.passwordA} readOnly />
                                        <div className="form-check">
                                            <input className="form-check-input checkbox-input" type="checkbox" value="" id="flexCheckDefault" onChange={ev => document.getElementById('passwordA').type = ev.target.checked ? "text" : "password"} />
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Show Password
                                            </label>
                                        </div>
                                    </form>
                                    <div className='flex-end'>
                                        <button type='submit' className='submit-change' onClick={() => setChangePassword(true)} >Change Password</button>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

































