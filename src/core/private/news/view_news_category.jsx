import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteCategory, useGetCategories } from "../../public/query";

const ViewCategory = () => {
    const isDesktopDevice = useMediaQuery("(min-width: 768px)");
    const [collapsed, setCollapsed] = useState(!isDesktopDevice);
    const navigate = useNavigate();

    useEffect(() => {
        setCollapsed(!isDesktopDevice);
    }, [isDesktopDevice]);

    const { data: categoryList, refetch, isLoading, isError, error } = useGetCategories();
    const deleteApi = useDeleteCategory();

    const deleteItem = (id) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            deleteApi.mutate(id, {
                onSuccess: () => {
                    alert("Category deleted successfully!");
                    refetch();
                },
                onError: (err) => {
                    alert("Failed to delete category. Please try again.");
                    console.error(err);
                },
            });
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 flex justify-center p-6">
            <div className="bg-white w-full max-w-5xl p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold text-center mb-4">News Categories</h2>

                {isLoading ? (
                    <p className="text-center text-gray-600">Loading categories...</p>
                ) : isError ? (
                    <p className="text-center text-red-500">Error: {error?.message || "Failed to load categories."}</p>
                ) : categoryList?.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-[#0A1A33] text-white">
                                    <th className="border border-gray-300 px-4 py-2">#</th>
                                    <th className="border border-gray-300 px-4 py-2">Name</th>
                                    <th className="border border-gray-300 px-4 py-2">Description</th>
                                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categoryList.map((category, index) => (
                                    <tr key={category._id} className="hover:bg-gray-100">
                                        <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                        <td className="border border-gray-300 px-4 py-2">{category.name}</td>
                                        <td className="border border-gray-300 px-4 py-2">{category.description}</td>
                                        <td className="border border-gray-300 px-4 py-2 flex gap-2">
                                            <button
                                                onClick={() => navigate(`/edit-category/${category._id}`)}
                                                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => deleteItem(category._id)}
                                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-center text-gray-600">No categories available.</p>
                )}
            </div>
        </div>
    );
};

export default ViewCategory;
