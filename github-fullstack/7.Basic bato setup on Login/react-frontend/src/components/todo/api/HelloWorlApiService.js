import axios from "axios"

const apiClient = axios.create(
    {
            baseURL:'http://localhost:8080'
    }
);
export const retrieveHelloWorldBean = ()=>apiClient.get("/hello-world-bean");

// export const retrieveHelloWorldPathVariable = 
//     (username)=>axios.get(`http://localhost:8080/hello-world/path-variable/${username}`,{
//         headers:{
//             Authorization: 'Basic cGF1bDp0aW1vdGh5'
//         }
//     })

// export const executeBasicAuthenticationService = 
//     (token)=>axios.get(`/basicauth`,{
//         headers:{
//             Authorization: token
//         }
//     })
export const retrieveHelloWorldPathVariable
    = (username) => apiClient.get(`/hello-world/path-variable/${username}`,{
        headers: {
            Authorization: 'Basic cGF1bDp0aW1vdGh5'
        }
    })

export const executeBasicAuthenticationService
    = (token) => apiClient.get(`/basicauth`,{
        headers: {
            Authorization: token
        }
    })
