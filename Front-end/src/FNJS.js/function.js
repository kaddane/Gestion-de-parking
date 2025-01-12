




export default function loginAdmin(login) {
  
    let dataUser = [];
  
    // if (localStorage.user != null) {
    //   dataUser = JSON.parse(localStorage.user);    
    // }else{
    //   dataUser = []
    // }
  
    dataUser.push(login)

    localStorage.setItem("login", JSON.stringify(dataUser))
  
  }




