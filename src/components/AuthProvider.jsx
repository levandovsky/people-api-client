import {useState} from "react";
import {AuthContext} from "../hooks/useAuth";
import {Auth} from "../services/auth";

// extract username from jwt
const getUsername = (token) => {
    let username = null;

    if (token) {
        const tokenPayload = token.split(".")[1];
        const decodedPayload = atob(tokenPayload);
        const parsedPayload = JSON.parse(decodedPayload);
        username = parsedPayload.username;
    }

    return username
}

export const AuthProvider = ({children}) => {
    const token = sessionStorage.getItem("token");

    const [state, setState] = useState({
        token,
        username: getUsername(token),
        error: null,
    });


    const login = async (user, password) => {
        const res = await Auth.login(user, password);

        if (res.error) {
            console.error(res.error);

            setState({error: res.error, token: null});

            return {error: res.error};
        }

        setState(({error: null, token: res.token, username: getUsername(res.token)}));
        sessionStorage.setItem("token", res.token);

        return {token: res.token};
    };

    const logout = () => {
        setState({
            token: null,
            error: null,
            username: null
        })

        sessionStorage.removeItem("token");
    };

    const value = {...state, login, logout};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
