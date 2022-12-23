import React, { useContext } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import './styles/googleLogin.css'

const GoogleLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success("You are logged in")
                navigate('/')
            })
            .catch(err => console.error(err))
    }
    return (
        <button className='google-btn' onClick={handleGoogleLogin}>
            <FcGoogle/>
            Continue with Google
        </button>
    )
}

export default GoogleLogin