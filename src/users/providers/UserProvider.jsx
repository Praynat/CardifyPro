import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getToken, getUser } from '../services/localStorageService';



const UserContext= createContext();


export default function UserProvider({children}) {
    

    const [token, setToken] = useState(getToken());
    const[user, setUser]=useState(null);
    const value = useMemo(()=>({
        user,
        token,
        setToken,
        setUser,
    }),[token,user])

    useEffect(() => {
        if (!user) {
          const userFromLocalStorage = getUser();
          setUser(userFromLocalStorage);
        }
      }, [user]);
    


    return <UserContext.Provider value={value}>{children}
    </UserContext.Provider>
}

export const useMyUser =()=>{
    const Usercontext =useContext(UserContext);
    if (!Usercontext) throw new Error("useMyUser must be used inside a Provider")
    return Usercontext;
}
