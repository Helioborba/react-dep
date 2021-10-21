import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false
});
// const AuthContextProvider = AuthContext.Provider()

export default AuthContext;