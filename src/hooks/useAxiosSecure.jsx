import axios from "axios";

const axiosSecure = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_API,
    headers: {
        'content-type': 'application/json',
    },
});

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;
