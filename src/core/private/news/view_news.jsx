import { useMediaQuery } from "@uidotdev/usehooks";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDeleteNews, useGetNews } from "../../public/query";

const ViewNews = () => {
    const isDesktopDevice = useMediaQuery("(min-width: 768px)");
    const [collapsed, setCollapsed] = useState(!isDesktopDevice);
    const navigate = useNavigate();

    useEffect(() => {
        setCollapsed(!isDesktopDevice);
    }, [isDesktopDevice]);

    const { data: newsList, refetch } = useGetNews();
    const deleteApi = useDeleteNews();

    const deleteItem = (id) => {
        if (window.confirm("Are you sure you want to delete this news article?")) {
            deleteApi.mutate(id, {
                onSuccess: () => {
                    alert("News article deleted successfully!");
                    refetch();
                },
                onError: (err) => {
                    alert("Failed to delete news article. Please try again.");
                    console.error(err);
                }
            });
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-950 flex">
            {/* Main Content */}
            <div className="bg-white flex-1 p-6 max-w-5xl mx-auto rounded-lg">
                <h2 className="text-lg font-semibold mb-4">News Articles</h2>

                <div className="bg-white  shadow-md rounded-lg p-4 overflow-hidden">
                    {newsList?.data?.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-[#0A1A33] text-white">
                                        <th className="border border-gray-300 px-4 py-2">#</th>
                                        <th className="border border-gray-300 px-4 py-2">Image</th>
                                        <th className="border border-gray-300 px-4 py-2">Title</th>
                                        <th className="border border-gray-300 px-4 py-2">Category</th>
                                        <th className="border border-gray-300 px-4 py-2">Content</th>
                                        <th className="border border-gray-300 px-4 py-2">Created At</th>
                                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {newsList.data.map((news, index) => (
                                        <tr key={news._id} className="hover:bg-gray-100">
                                            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                <img
                                                    src={`http://localhost:3000/news_image/${news.image}`}
                                                    alt={news.image}
                                                    className="w-14 h-14 object-cover rounded-md"
                                                />
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">{news.title}</td>
                                            <td className="border border-gray-300 px-4 py-2">{news.categoryId?.name}</td>
                                            <td className="border border-gray-300 px-4 py-2 truncate max-w-xs">{news.content}</td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {news.created_at ? format(new Date(news.created_at), "PPP") : "N/A"}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2 flex gap-2">
                                                <button
                                                    onClick={() => navigate("/edit-news/" + news._id)}
                                                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => deleteItem(news._id)}
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
                        <p className="text-center text-gray-600 mt-4">No news articles available.</p>
                    )}
                </div>

                {/* Outlet for Admin Pages */}
                <div className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ViewNews;
