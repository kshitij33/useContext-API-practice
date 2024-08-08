import React, { useState, useContext } from 'react'
import UserContext from '../contexts/userContext';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const HandleSubmit =(event)=>{
        event.preventDefault();
        // console.log(username);
        setUser({username, password});
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder='username' name="" id="" />
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder='password' name="" id="" />
        <button onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default Login