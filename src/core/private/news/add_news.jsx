import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
import { useGetCategory, useSaveProduct } from "../../public/query";

const Layout = () => {
    const isDesktopDevice = useMediaQuery("(min-width: 768px)");
    const [collapsed, setCollapsed] = useState(!isDesktopDevice);

    const { data: categoryList, isLoading: isCategoryLoading } = useGetCategory();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const saveApi = useSaveProduct();

    useEffect(() => {
        setCollapsed(!isDesktopDevice);
    }, [isDesktopDevice]);

    const submit = (data) => {
        console.log("Raw form data:", data);

        const formData = new FormData();
        formData.append("categoryId", data.categoryId);
        formData.append("title", data.title);
        formData.append("file", data.image[0]);
        formData.append("content", data.content);
        formData.append("created_at", new Date().toISOString());

        console.log("Form Data before sending:", Object.fromEntries(formData.entries()));

        saveApi.mutate(formData, {
            onSuccess: () => {
                alert("News added successfully!");
                reset();
            },
            onError: (err) => {
                alert("Failed to add product. Please try again.");
                console.error("Error adding product:", err);
            },
        });
    };

    return (
        <div className="min-h-screen bg-white transition-colors dark:bg-slate-950 p-6">
            <div className="flex flex-col items-center justify-center min-h-screen">
                {/* ✅ Add Product Form */}
                <div className="w-full max-w-md p-6 bg-[#101F3F] text-white shadow-lg rounded-lg">
                    <form className="p-6" onSubmit={handleSubmit(submit)}>
                        <h1 className="text-2xl font-bold text-center mb-5">
                            Add Product
                        </h1>

                        {/* Category Selection */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Select a Category</label>
                            <select
                                className="w-full p-3 bg-white text-black border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                {...register("categoryId", { required: "Category is required" })}
                            >
                                <option value="">Choose a category</option>
                                {isCategoryLoading ? (
                                    <option disabled>Loading categories...</option>
                                ) : (
                                    categoryList?.data?.map((category) => (
                                        <option key={category._id} value={category._id}>
                                            {category.name}
                                        </option>
                                    ))
                                )}
                            </select>
                            {errors.categoryId && <p className="text-red-500 text-xs mt-1">{errors.categoryId.message}</p>}
                        </div>

                        {/* Product Title */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Title</label>
                            <input
                                type="text"
                                className="w-full p-3 bg-white text-black border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter product title"
                                {...register("title", { required: "Title is required" })}
                            />
                            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
                        </div>

                        {/* Upload Image */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Upload Image</label>
                            <input
                                type="file"
                                className="w-full p-3 bg-white text-black border border-gray-400 rounded-lg cursor-pointer focus:ring-blue-500 focus:border-blue-500"
                                {...register("image", { required: "Image is required" })}
                                accept="image/*"
                            />
                            {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>}
                        </div>

                        {/* Content */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium">Content</label>
                            <textarea
                                rows="3"
                                className="w-full p-3 bg-white text-black border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter product details"
                                {...register("content", { required: "Content is required" })}
                            />
                            {errors.content && <p className="text-red-500 text-xs mt-1">{errors.content.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <div className="mt-5 text-center">
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                                disabled={saveApi.isLoading}
                            >
                                {saveApi.isLoading ? "Saving..." : "Add News"}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Outlet for Admin Pages */}
                <div className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
