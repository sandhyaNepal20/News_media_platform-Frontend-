import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useRegisterUser = () => {
    return useMutation({
        mutationKey: "Register_User",
        mutationFn: (data) => {
            console.log(data)
            return axios.post("http://localhost:3000/api/users/register", { data })
        }
    });
};

export const useLoginUser = () => {
    return useMutation({
        mutationKey: "Login_User",
        mutationFn: (data) => {
            console.log(data)
            return axios.post("http://localhost:3000/api/users/login", { data })
        }
    });
};