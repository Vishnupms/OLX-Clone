import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/firebaseContext';
import './Signup.css';
import { toast,Toaster } from 'react-hot-toast';
export default function Signup() {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [passwordValidate,  setPasswordValidate] = useState('')
  const [password,setPassword] = useState('')
  const [validate,setValidate] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory({})
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(email===""){
     setEmail("email required")
     
    }
    if(password===""){
      setPasswordValidate("Password required")
     
    }
    if(username===""){
      setValidate("username required")
     
    }
    if(phone===""){
     setPhone("phone Number required")
     
    }
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      console.log(result,"ll")
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
          history.push('/login')
        })
      })
    })
  }
  return (
    <div>
      <Toaster/>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            name="name"
            defaultValue="John"
            placeholder={validate? validate:'enter username'}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
            placeholder={email? email:'enter email'}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            name="phone"
            defaultValue="Doe"
            placeholder={phone?phone:'Enter Phone Number'}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
            pattern={8}
            title='password should be eight charecters'
            placeholder={passwordValidate ? passwordValidate : 'Enter password'}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href='/login'>Login</a>
      </div>
    </div>
  );
}
