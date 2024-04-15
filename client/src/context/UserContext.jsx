import {useContext, createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const[isAuthenticated, setIsAuthenticated] = useState(false)
    const [id_user, setIdUser] = useState(null);
    const [user, setUser] = useState(null);
    return(
        <UserContext.Provider value={{isAuthenticated, setIsAuthenticated, id_user, setIdUser, user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;
export const useUserContext = () => useContext(UserContext);