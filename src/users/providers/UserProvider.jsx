import React, { createContext, useContext } from 'react'



const UserContext= createContext();

export default function UserProvider({children}) {
    const myUser={
        "_id":"65424ae9a8d1eae12d31e360",
        "isBusiness":true,
        "isAdmin":false,
    };
    
    return <UserContext.Provider value={myUser}>{children}
    </UserContext.Provider>
}

export const useMyUser =()=>{
    const Usercontext =useContext(UserContext);
    if (!Usercontext) throw new Error("useMyUser must be used inside a Provider")
    return Usercontext;
}
