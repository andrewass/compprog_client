import React, {createContext, useState} from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [signedIn, setSignedIn] = useState(false);

    return (
        <AuthContext.Provider value={{signedIn, setSignedIn}}>
            {props.children}
        </AuthContext.Provider>
    );
}