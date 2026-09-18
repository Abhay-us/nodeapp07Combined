import axios from "axios";

const axiosinterceptor = axios.create({
    baseURL:"http://localhost:5454", 
    timeout: 3600,
    headers: {
        content: "application/json"
    }   
});

//request body
axiosinterceptor.interceptors.request.use(
    (config) => {
        console.log("Request : ", config)

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

// response body
axiosinterceptor.interceptors.response.use(
    (response)=>{
        console.log("Response : ", response)
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default axiosinterceptor;