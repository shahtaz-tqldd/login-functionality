import React, { useContext } from 'react'
import { toast } from 'react-hot-toast'
import { MdEmail, MdPhone} from 'react-icons/md'
import { TiUser} from 'react-icons/ti'
import { AuthContext } from '../context/AuthProvider'
import './styles/home.css'

const Homepage = () => {
  const { user, logout } = useContext(AuthContext)
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.error("You are logged out!")
      })
      .catch(err => console.error(err))
  }
  return (
    <div>
      <div className='home-card'>
        <h1>Welcome</h1>
        <div>
          <p><TiUser/>{user.displayName}</p>
          <p><MdEmail/>{user.email}</p>
          {user?.phone && <p><MdPhone/>{user.phone}</p>}
        </div>
      </div>
      <button style={{marginTop: '50px'}} className='logout-btn' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Homepage