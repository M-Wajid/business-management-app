import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom"


export default function AuthUser(){
    const navigate = useNavigate();

    const getToken = () =>{
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () =>{
        const userString = sessionStorage.getItem('user');
        const user_details = JSON.parse(userString);
        return user_details;
    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    const saveToken = (user,token) =>{
        sessionStorage.setItem('token',JSON.stringify(token));
        sessionStorage.setItem('user',JSON.stringify(user));

        setToken(token);
        setUser(user);
        navigate('/');
    }

    const logout = () => {
        sessionStorage.clear();
        navigate('/login');
    }

    const http = axios.create({
        baseURL: "/api/v1/users",
        headers:{
            "content-type": "application/json"
        }
    });

    const bearerToken = "Bearer " + token;
    const config = { headers: { authorization: bearerToken } };

    return{
        setToken: saveToken,
        token,
        user,
        getToken,
        config,
        http,
        logout
    }
}