import React, { useEffect } from 'react'
import axiosInstance from '../components/Axios'
import { useNavigate } from 'react-router-dom'

export default function LogOut() {
  const navigate = useNavigate()

  useEffect(() => {
    const response = axiosInstance.post('user/logout/blacklist/', {
      refresh_token: localStorage.getItem('refresh_token'),
    })
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    axiosInstance.defaults.headers['Authorization'] = null
    navigate('/log-in')
  })
  return <div>Logout</div>
}
