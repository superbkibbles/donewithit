import { useContext } from "react";
import jwtDecode from 'jwt-decode';

import AuthContext from "./context";
import { removeToken, storeToken } from './storage';

export default useAuth = () => {
    const {user, setUser } = useContext(AuthContext);
    
    const logOut = () => {
        setUser(null);
        removeToken();
    }
    
    const login = (token) => {
        const user = jwtDecode(token);
        setUser(user);
        storeToken(token);
    }
    return { user, setUser, logOut, login }
}