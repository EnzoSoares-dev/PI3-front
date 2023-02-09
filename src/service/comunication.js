import axios from "axios"

// const clientConfiguration = ()=>{
//     return{
//         baseUrl: 'localhost:9000'
//     }
// }

export const client = axios.create(
    {
    baseURL: 'http://localhost:9000',
    headers: { 'Authorization': sessionStorage.getItem('token') || false}
})