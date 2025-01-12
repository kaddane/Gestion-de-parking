




// import React, { useState } from 'react'
// import axios from "axios"
// import { useParams } from 'react-router-dom'

// export default function Update() {
//     const [add, setAdd] = useState({
//         name : "",
//         lastname : "",
//         email : "",
//         password : ""
//     })
    
//     const {adminID} = useParams()
//     console.log(adminID)
    
//     function handerChange(ev){
//         setAdd({...add, [ev.target.name]: ev.target.value})
//         console.log(add)
//     }

//     function updateFn(ev){
//         ev.preventDefault()
//         axios.put("http://localhost:8800/admin/" + adminID, add)
//     }


//   return (
//     <div>
//         <h1>adddddddddddd</h1>
//         <form onSubmit={(ev) => updateFn(ev)}>
//             <input type='text' name='name' onChange={ev=> handerChange(ev)} />
//             <input type='text' name='lastname' onChange={ev=> handerChange(ev)} />
//             <input type='email' name='email' onChange={ev=> handerChange(ev)} />
//             <input type='password' name='password' onChange={ev=> handerChange(ev)} />
//             <input type='submit' value="click" />
//         </form>
//     </div>
//   )
// }



