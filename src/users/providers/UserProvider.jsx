import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getToken, getUser } from '../services/localStorageService';
import { getUserData } from '../services/usersApiService';



const UserContext= createContext();


export default function UserProvider({children}) {
    

    const [token, setToken] = useState(getToken());
    const[user, setUser]=useState(null);
    const[userData,setUserData]=useState();

    useEffect(() => {
        if (!user) {
          const userFromLocalStorage = getUser();
          setUser(userFromLocalStorage);
        }
      }, [user]);


      useEffect(() => {
        const fetchUserData = async () => {
          
            try {
              const data = await getUserData(user._id);
              setUserData(data);
            } catch (error) {
              console.error("Failed to fetch user data:", error);
            }
          
        };
    
        fetchUserData();
      }, [user]);
    
      
    const value = useMemo(()=>({
        user,
        token,
        setToken,
        setUser,
        userData,
    }),[token,user,userData])

    


    return <UserContext.Provider value={value}>{children}
    </UserContext.Provider>
}

export const useMyUser =()=>{
    const Usercontext =useContext(UserContext);
    if (!Usercontext) throw new Error("useMyUser must be used inside a Provider")
    return Usercontext;
}
