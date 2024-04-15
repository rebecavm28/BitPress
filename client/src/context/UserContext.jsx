import {useContext, createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {

    const[isAuthenticated, setIsAuthenticated] = useState(false)
    
    return(
        <UserContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;

export const useUserContext = () => useContext(UserContext);
