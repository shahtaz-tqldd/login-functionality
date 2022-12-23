import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const EmailVerified = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    if (user?.emailVerified) {
        navigate('/')
    }
    return (
        <div style={{ height: '300px',  width:'450px', border:'1px solid #555', borderRadius:'10px', display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <h2>Please verify your email</h2>
            <p>and then Refresh this page</p>
        </div>
    )
}

export default EmailVerified