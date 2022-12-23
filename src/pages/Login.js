import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider'
import GoogleLogin from './GoogleLogin';
import './styles/register.css'

const Login = () => {
  const [emailAddress, setEmailAddress] = useState('')
  const { emailLogin, forgotPassword } = useContext(AuthContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleLogin = (data) => {
    const { email, password } = data

    emailLogin(email, password)
      .then(() => {
        toast.success("You are logged in!")
        navigate(from, { replace: true })
      })
      .catch(err => console.error(err))
  }

  const handleEmailAddress = e => {
    const emailAdd = e.target.value
    setEmailAddress(emailAdd)
  }
  const handleForgotPassword = () => {
    forgotPassword(emailAddress)
      .then(() => {
        toast.success("Please check email to reset your password")
      })
      .catch(err => console.error(err))

  }
  return (
    <div className='register'>
      <h2>Login</h2>
      <form className='register-form' onSubmit={handleSubmit(handleLogin)}>

        <div onBlur={handleEmailAddress}>
          <label>Email</label>
          <input {...register("email", { required: "Please provide your email" })} type="email" name='email' placeholder='Enter your email' />
          {errors.email && <span className='error-text'>{errors.email.message}</span>}
        </div>

        <div>
          <label>Password</label>
          <input {...register("[password]", { required: "Please provide a password" })} type="password" placeholder='password' />
          {errors.password && <span className='error-text'>{errors.password.message}</span>}
        </div>

        <span><span onClick={handleForgotPassword} style={{color:'blue', cursor:'pointer'}}><small>Forgot password?</small></span></span>

        <input type="submit" value="Login" className='btn' />
      </form>
      <GoogleLogin />
      <div>
        Don't have any account? <Link to='/register'>Create account</Link>
      </div>
    </div>
  )
}

export default Login