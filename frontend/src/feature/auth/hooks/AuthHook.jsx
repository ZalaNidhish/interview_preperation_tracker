import { useContext } from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router'
import { toast } from 'react-toastify'
import { AuthContext } from '../../../app/context/AuthContext'

export const useAuth = ()=>{

    const {register, reset, handleSubmit, formState:{errors}, watch} = useForm()
    const navigate = useNavigate()

    const {users, setUsers, setUser} = useContext(AuthContext)
    
    const loginUser = (data)=>{

        const isUser = users.find(u=>{
            return u.email === data.email
        })
    
        if(!isUser){
            return toast.error("Invalid email or password")
        }

        if(isUser.password !== data.password){
            return toast.error("Invalid email or password")
        }

        setUser(isUser)
        localStorage.setItem('tracker_active_user', JSON.stringify(isUser))
        reset()
        navigate('/')
    }

    const registerUser = (data)=>{
        const user = {name: data.name, email: data.email, password: data.password}
        const alreadyUserExists = users.find(u=>{
            return u.email === user.email
        })

        if(alreadyUserExists){
            return toast.error("User already exists")
        }

        localStorage.setItem('tracker_users', JSON.stringify([...users, user]))
        localStorage.setItem('tracker_active_user', JSON.stringify(user))
        setUser(user)
        setUsers(pre=>{[...pre, user]})
        reset()
        navigate('/')
    }


    return {register, handleSubmit, errors, navigate, loginUser, registerUser, watch}

}