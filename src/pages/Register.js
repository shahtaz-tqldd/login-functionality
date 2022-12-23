import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider'
import GoogleLogin from './GoogleLogin';
import './styles/register.css'

const Register = () => {
    const { emailRegister, userUpdate, verifyEmail } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const handleRegister = (data) => {
        const { name, email, phone, password } = data
        console.log(name, email, phone, password)
        const userInfo = {
            displayName: name,
            phone
        }
        emailRegister(email, password)
            .then(() => {
                userUpdate(userInfo)
                    .then(() => {
                        toast.success("User created successfully")
                        verifyEmail()
                            .then(() => {
                                navigate('/verify-email')
                            })
                            .catch(err => console.error(err))
                    })
                    .catch(err => {console.error(err)})
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='register'>
            <h2>Open a new Account</h2>
            <form className='register-form' onSubmit={handleSubmit(handleRegister)}>
                <div>
                    <label>Your Name</label>
                    <input {...register("name", { required: "Please provide your name" })} type="text" placeholder='Enter your name' />
                    {errors.name && <span className='error-text'>{errors.name.message}</span>}
                </div>

                <div>
                    <label>Email</label>
                    <input {...register("email", { required: "Please provide your email" })} type="email" placeholder='Enter your email' />
                    {errors.email && <span className='error-text'>{errors.email.message}</span>}
                </div>

                <div>
                    <label>Phone Number</label>
                    <input {...register("phone", { required: "Please provide your phone number" })} type="text" placeholder='Enter your phone number' />
                    {errors.phone && <span className='error-text'>{errors.phone.message}</span>}
                </div>

                <div>
                    <label>Password</label>
                    <input {...register("[password]", { required: "Please provide a password" })} type="password" placeholder='password' />
                    {errors.password && <span className='error-text'>{errors.password.message}</span>}
                </div>

                <input type="submit" value="Register" className='btn' />
            </form>
            <GoogleLogin />
            <div>
                Already have an account? <Link to='/login'>Login Here</Link>
            </div>
        </div>
    )
}

export default Register