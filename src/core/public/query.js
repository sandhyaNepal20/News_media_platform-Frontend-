import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
const API_BASE_URL = "http://localhost:3000/api/users";

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
// Forgot Password
export const useForgotPassword = () => {
    return useMutation({
        mutationKey: "Forgot_Password",
        mutationFn: (email) => axios.post(`${API_BASE_URL}/forgot-password`, { email }),
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


export const useNewsGetByCategory = (categoryId) => {
    console.log(categoryId);

    return useQuery({
        queryKey: ["GET_NEWS_BY_CATEGORY", categoryId],
        queryFn: () => {
            return axios.get(`http://localhost:3000/api/news/category/${categoryId}`);
        },
        enabled: !!categoryId, // Ensures query only runs if categoryId is provided
    });
};

export const useSearchNews = (searchTerm) => {
    return useQuery({
        queryKey: ["SEARCH_NEWS", searchTerm],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:3000/api/news/getAll?search=${searchTerm}`);
            return response.data;
        },
        enabled: !!searchTerm, // Run only when searchTerm exists
    });
};

export const useGetCategories = () => {
    return useQuery({
        queryKey: "GET_CATEGORIES",
        queryFn: async () => {
            const response = await axios.get("http://localhost:3000/api/category"); // ✅ Corrected API path
            return response.data;
        }
    });
};

export const useDeleteCategory = () => {
    return useMutation({
        mutationKey: "DELETE_CATEGORY",
        mutationFn: async (id) => {
            return axios.delete(`http://localhost:3000/api/category/${id}`); // ✅ Corrected API path
        }
    });
};


