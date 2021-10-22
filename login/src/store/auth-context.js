import React,{useState,useEffect} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});
export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //* Manter o dado de login com useeffect
    useEffect( () => {
        const currentValueForLoggedUser = localStorage.getItem('isLoggedIn','1');
        
        if (currentValueForLoggedUser === '1') {
        setIsLoggedIn(true);
        }
    },
    [] );
    const loginHandler = (email, password) => {
        //* We should of course check email and password
        //* But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn','1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn','1');
        setIsLoggedIn(false);
    };
    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}>
        {props.children}
        </AuthContext.Provider>
    )
} 

//* export default AuthContextProvider;
export default AuthContext;