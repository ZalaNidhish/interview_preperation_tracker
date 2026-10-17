import { Outlet, Navigate } from 'react-router'
import { useContext } from 'react'
import { AuthContext } from '../../app/context/AuthContext';

const AuthProtected = () => {

  const {user} = useContext(AuthContext)

  // if(user){
  //   return <Navigate to={'/'}/>
  // }

  return <Outlet />
}

export default AuthProtected