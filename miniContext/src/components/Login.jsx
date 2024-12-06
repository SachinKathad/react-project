import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const {setUser} = useContext(UserContext)   //we have created usercontext and made two file user and setUser(setuser is used to give value or submit value and user is used to take value)

  
  const handleSubmit = (e)=>{
    e.preventDefault()
    setUser({username, password})

  }
  return (
    
    
    <div>
    <h2>Login</h2>
    <input type="text" onChange={(e)=> setUsername(e.target.value)} value={username} placeholder='username'/>
    <input type="text" onChange={(e)=> setPassword(e.target.value)} value={password} placeholder='password'/>
    <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
