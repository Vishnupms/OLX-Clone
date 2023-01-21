import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/firebaseContext';
import './Login.css';
import { Toaster,toast } from 'react-hot-toast';
function Login() {
  const [email,setEmail] = useState('')
  const[error,setError] = useState(false)
  const [password,setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  const handleLogin = (e)=>{
    e.preventDefault()
    if(email ==="" && password ==="" ) 
    {
     setError(true) 
     return
    }
   
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      alert('LoggedIn')
      history.push('/')
    }).catch((error)=>{
   
      if(error.message)
      {
      toast.error(error.message)
      }
      console.log(error,"kkkk")
    })
    
  }
  return (
    <div>
        <Toaster/>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form noValidate onSubmit={handleLogin}>
          {error && <p className='error'>please enter valid details</p>}
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            placeholder='enter email'
            required
            defaultValue="John"

          />
          <br />
          <label htmlFor="lname" required>Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            placeholder='enter password'
            required 
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
