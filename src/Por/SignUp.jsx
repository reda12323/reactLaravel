import React from 'react'
import{ useState } from 'react';
import './SignUp.css';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export const SignUp = () => {
  const [isActive, setIsActive] = useState();
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [data, setData] = useState([]);
  const [email1 , setEmail1] = useState('');
  const [password1 , setPassword1] = useState('');
  const navigate = useNavigate()
  const handleRegisterClick = () => {
    setIsActive(false);
  };
  const handleSubmitUp = (e) => {
    e.preventDefault();
    if(name.length === 0 ){
      alert("Name has left empty");
    }
    else if(email.length === 0 ){
      alert("Email has left empty");
    }
    else if(password.length === 0 ){
      alert("Password has left empty");
    }
    else{
      const url = "http://localhost/phpscript/Account.php";
      
      let fData = new FormData();
      fData.append('name',name);
      fData.append('email',email);
      fData.append('password',password);
      axios.post(url, fData)
      .then(response=> alert(response.data))
      .catch(error=> alert(error));
    }
  }
  const fetchData = () => {
      fetch('http://localhost/phpscript/AccountAff.php')
            .then(response => response.json())
            .then(data => {
                console.log('Received data:', data);
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    useEffect(() => {
        fetchData();
    }, []);

  const handleLoginClick = () => {
    setIsActive(true);
  };
  const handleSubmitIn = (e) => {
    e.preventDefault();
    const foundUser = data.find((account) => account.email === email1);
    if(foundUser){
        if(foundUser.password === password1){
          navigate('/')
        }
        else if(foundUser.password !== password1 && password1 !== "admin"){
          alert("password false");
        }
    }else if(foundUser !== email1 && email1 !== "admin"){
      alert("email false");
    }
    if(email1=== "admin"){
      if(password1 === "admin"){
        navigate("/admin");
      }
    }
  };
  return (
    <div className='container3' >
      <div className={`container2 ${isActive ? 'active' : ''}`} id='container'>
      <div className="form-container sign-up">
        <form  onSubmit={handleSubmitUp}>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className='icon'><i class="fa-brands fa-google"></i></a>
            <a href="#" className='icon'><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" className='icon'><i class="fa-brands fa-github"></i></a>
            <a href="#" className='icon'><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registeration</span>
          <input type="text" id='name' name='name' value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />
          <input type="email" id='email' name='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" id='password' name='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSubmitUp}>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleSubmitIn}>
          <h1>SIGN IN</h1>
          <div className="social-icons">
            <a href="#" className='iconn1'><i class="fa-brands fa-google"></i></a>
            <a href="#" className='iconn1'><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" className='iconn1'><i class="fa-brands fa-github"></i></a>
            <a href="#" className='iconn1'><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email password</span>
          <input type="email" id='email1' name='email1' value={email1} placeholder='Email' onChange={(e) => setEmail1(e.target.value)} />
          <input type="password" id='password1' name='password1' value={password1} placeholder='Password' onChange={(e) => setPassword1(e.target.value)} />
          <a href="#">Forget Your Password?</a>
          <button onClick={handleSubmitIn}>
            Sign In
          </button>
      </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your pesonal details to use all of site features</p>
            <button className='hidden2' id='register'  onClick={handleRegisterClick}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your pesonal details to use all of site features</p>
            <button className='register' id='login' onClick={handleLoginClick}>Sign Up</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}