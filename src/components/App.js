
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let[user,setUser]=useState({name:"",email:"",password:""});
  //   console.log(user);
    function submitted(e){
      e.preventDefault();
      console.log(user);
    }
  return (
    <div>
        {/* Do not remove the main div */}
        <form>
          <input type="text" placeholder="Name" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})}/>
          <input type="email" placeholder="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
          <input type="password" placeholder="Password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
          <button onClick={submitted}>Submit</button>
        </form>
    </div>
  )
}

export default App
