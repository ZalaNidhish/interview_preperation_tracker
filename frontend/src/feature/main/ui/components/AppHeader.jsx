import { BookOpenCheck, ChevronDown, LogOut } from 'lucide-react'
import { useContext } from 'react';
import {MainContext} from '../../../../app/context/MainContext'
import { useAuth } from '../../../auth/hooks/AuthHook';
import { AuthContext } from '../../../../app/context/AuthContext';

const AppHeader = () => {

  const {user, setUser} = useContext(AuthContext)
  const arr = user.name.split(' ')
  const logo = arr.map(word=>{
    return word.charAt(0).toUpperCase()
  })

  const logoutUser = ()=>{
      const confirmlogout = confirm("Confirm Logout")
      if(confirmlogout){
          localStorage.removeItem("tracker_active_user")
          setUser(null)
      }
  }

  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-17 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-white shadow-sm"><BookOpenCheck size={19} strokeWidth={2.2} /></div>
          <div className="text-[15px] font-bold tracking-tight text-zinc-900">Interview Tracker</div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">{logo}</div><span className="hidden text-sm font-medium text-zinc-700 sm:block">{user.name}</span><span onClick={logoutUser} className="bg-red-500/30 text-red-500 text-sm cursor-pointer p-2 rounded">Logout</span></div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader;