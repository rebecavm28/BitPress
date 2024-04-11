import {useContext, createContext, useState } from "react";

const UserContext = createContext();

const UserProvider =({children}) => {
    const[IsAuthenticated, setIsAuthenticated] = useState(false)
    return(
        <UserContext.Provider value={{IsAuthenticated, setIsAuthenticated}}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;
export const useUserContext = () => useContext(UserContext);
