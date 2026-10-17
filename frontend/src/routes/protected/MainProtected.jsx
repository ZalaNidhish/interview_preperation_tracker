import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { AuthContext } from '../../app/context/AuthContext'

const MainProtected = () => {  
  
  const {user} = useContext(AuthContext)
  
  if(!user || user.length == 0){
    return <Navigate to={'/auth'}/>
  }

  return <Outlet />

}

export default MainProtected