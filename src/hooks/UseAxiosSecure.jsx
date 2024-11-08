import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "car-service-server-blue.vercel.app",
  withCredentials: true,
});

const UseAxiosSecure = () => {
    const { logOut } = UseAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res
        },error => {
console.log('error comes from interceptor' , error.response.status);
if (error.response.status === 401 || error.response.status === 403 ) {
    console.log('logout the user');
    logOut()
    .then(() =>{
        navigate('/login')
    })
    .catch( error => console.log(error))
}
    })
    },[])

  return axiosSecure;
};

export default UseAxiosSecure;
