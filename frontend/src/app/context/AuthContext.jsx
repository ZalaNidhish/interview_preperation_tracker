import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("tracker_active_user")) || null) 
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("tracker_users")) || []) 

    return <AuthContext.Provider value={{user, setUser, users, setUsers}}>
        {children}
    </AuthContext.Provider>

}