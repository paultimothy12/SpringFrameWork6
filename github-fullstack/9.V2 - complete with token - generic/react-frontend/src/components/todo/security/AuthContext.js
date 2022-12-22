import { createContext, useContext, useState } from "react";
import { apiClient } from "../api/ApiClient";
import { executeBasicAuthenticationService } from "../api/HelloWorlApiService";

//1: Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//2: Share the created context with other components
export default function AuthProvider({ children }) {

    //3: Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [token, setToken] = useState(null)

async function login(username, password) {

        const baToken = 'Basic ' + window.btoa( username + ":" + password )
        try {

            const response = await executeBasicAuthenticationService(baToken)

            if(response.status==200){
                setAuthenticated(true)
                setToken(baToken)
                apiClient.interceptors.request.use(
                    (config)=>{config.headers.Authorization=baToken 
                                return config
                            }
                )
                return true            
            } else {
                logout()
                return false
            }    
        } catch(error) {
            logout()
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
        setToken(null)
    }


    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout,token}  }>
            {children}
        </AuthContext.Provider>
    )
} 