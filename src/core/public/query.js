import { useMutation, useQuery } from "@tanstack/react-query";
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
export const useNewsCategory = () => {
    return useMutation({
        mutationKey: "News_Category",
        mutationFn: async (data) => {
            const response = await axios.post("http://localhost:3000/api/category/save", data);
            return response.data; // Ensure this returns actual response data
        }
    });
};

export const useGetCategory = () => {
    return useQuery({
        queryKey: "GET_News_CATEGORY",
        queryFn: () => {
            return axios.get("http://localhost:3000/api/category")
        }
    });
};
export const useSaveProduct = () => {
    return useMutation({
        mutationKey: "SAVE_PRODUCT",
        mutationFn: (data) => {
            console.log(data)
            return axios.post("http://localhost:3000/api/news/save", data)
        }
    });
};


export const useGetNews = () => {
    return useQuery({
        queryKey: "GET_PRODUCT",
        queryFn: () => {
            return axios.get("http://localhost:3000/api/news/getAll")
        }
    });
};

export const useNewsGetById = (id) => {

    console.log(id)
    return useQuery({
        queryKey: ["GET_NEWS_BY_ID", id],
        queryFn: () => {
            return axios.get(`http://localhost:3000/api/news/${id}`);
        },
    });




};

export const useDeleteNews = () => {
    return useMutation({
        mutationKey: "DELETE_PRODUCT",
        mutationFn: async (id) => {

            return axios.delete(`http://localhost:3000/api/news/${id}`);
        }
    });
};


