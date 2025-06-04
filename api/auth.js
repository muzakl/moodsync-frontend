import axios from "axios";

export const loginUser = async (form) => {
    return axios.post("http://localhost:5000/api/auth/login", form);
};

export const registerUser = async (form) => {
    return axios.post("http://localhost:5000/api/auth/register", form);
};
