import React from 'react'
import{ useState } from 'react';
import './SignUp.css'
export const SignUp = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(false);
  };

  const handleLoginClick = () => {
    setIsActive(true);
  };
  return (
    <div className='container3' >
      <div className={`container2 ${isActive ? 'active' : ''}`} id='container'>
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className='icon'><i class="fa-brands fa-google"></i></a>
            <a href="#" className='icon'><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" className='icon'><i class="fa-brands fa-github"></i></a>
            <a href="#" className='icon'><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registeration</span>
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sing In</h1>
          <div className="social-icons">
            <a href="#" className='iconn1'><i class="fa-brands fa-google"></i></a>
            <a href="#" className='iconn1'><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" className='iconn1'><i class="fa-brands fa-github"></i></a>
            <a href="#" className='iconn1'><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
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
            <h1>Hellow, Friend!</h1>
            <p>Register with your pesonal details to use all of site features</p>
            <button className='register' id='login' onClick={handleLoginClick}>Sign Up</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}