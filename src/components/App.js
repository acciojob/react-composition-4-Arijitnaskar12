
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let[user,setUser]=useState({name:"",email:"",password:""});
  function Submitted(){
    console.log(user);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <form onSubmit={Submitted}>
          <input type="text" placeholder="Name" onChange={(e)=>setUser(...user,name=e.target.value)}/>
          <input type="email" placeholder="email" onChange={(e)=>setUser(...user,email=e.target.value)}/>
          <input type="password" placeholder="Password" onChange={(e)=>setUser(...user,password=e.target.value)}/>
        </form>
    </div>
  )
}

export default App
