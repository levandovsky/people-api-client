import {useState} from "react";
import {AuthContext} from "../hooks/useAuth";
import {Auth} from "../services/auth";

// extract username from jwt
const decodeToken = (token) => {
    if (!token) return null;

    const [, tokenPayload] = token.split(".");
    const decodedPayload = atob(tokenPayload);

    return JSON.parse(decodedPayload);
};

export const AuthProvider = ({children}) => {
    const token = sessionStorage.getItem("token");
    const decoded = decodeToken(token);

    const [state, setState] = useState({
        token,
        username: decoded ? decoded.username : null,
        error: null,
    });

    const login = async (user, password) => {
        const res = await Auth.login(user, password);

        if (res.error) {
            console.error(res.error);

            setState({error: res.error, token: null});

            return {error: res.error};
        }

        setState({error: null, token: res.token, username: decodeToken(res.token).username});
        sessionStorage.setItem("token", res.token);

        return {token: res.token};
    };

    const logout = () => {
        setState({
            token: null,
            error: null,
            username: null,
        });

        sessionStorage.removeItem("token");
    };

    const value = {...state, login, logout};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
