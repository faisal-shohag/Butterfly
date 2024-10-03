import axios from "axios";


const axiosSecure = axios.create({
    // baseURL: "https://student-management-server-soft.vercel.app/",
    // baseURL: 'http://192.168.0.104:3000/',
    // baseURL: 'http://192.168.0.104:3000/',
    // baseURL: 'http://192.168.158.108:3000/',
    // baseURL: 'http://localhost:3000/',
    baseURL: process.env.NEXT_PUBLIC_SERVER_API,
    headers: {
        'content-type': 'application/json'
    },
    // withCredentials: true
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;