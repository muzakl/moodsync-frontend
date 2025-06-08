import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api/auth",
});

API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export const registerUser = async (userData) => {
    const res = await axios.post("http://localhost:5000/api/auth/register", userData, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return res.data;
};
export const loginUser = async (form) => {
    try {
        const response = await API.post("/login", form);
        const { token } = response.data;

        localStorage.setItem("token", token);

        return response.data;
    } catch (err) {
        throw err.response?.data || { error: "Login failed" };
    }
};