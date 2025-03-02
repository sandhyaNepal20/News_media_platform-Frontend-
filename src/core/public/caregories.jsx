import { motion } from "framer-motion"; // Import Framer Motion for animations
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/footer.jsx";
import Navbar from "../../components/navbar.jsx";
import { useGetCategory, useNewsGetByCategory } from "../public/query.js";

const CategoryPage = () => {
    const { categoryName } = useParams();
    const navigate = useNavigate();
    const [categoryId, setCategoryId] = useState(null);

    // Fetch categories
    const { data: categories } = useGetCategory();

    useEffect(() => {
        if (categories && categoryName) {
            const category = categories.data.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase());
            if (category) {
                setCategoryId(category._id);
            }
        }
    }, [categories, categoryName]);

    // Fetch news by categoryId only when it's available
    const { data: newsData, isLoading, isError } = useNewsGetByCategory(categoryId);

    if (isLoading) return <div className="text-center mt-10 text-lg dark:text-white">Loading...</div>;
    if (isError || !newsData || newsData.data.length === 0) return (
        <div className="text-center mt-10 text-gray-500 dark:text-gray-400">No news found for this category.</div>
    );

    const featuredNews = newsData.data[0];
    const otherNews = newsData.data.slice(1);

    return (
        <div>             <Navbar />
            <div className="bg-[#f8f9fa] dark:bg-gray-900 dark:text-white min-h-screen pb-10 transition-all">

                {/* Category Title */}
                <div className="w-full text-center py-12 bg-gray-200 dark:bg-gray-800 text-black dark:text-white pt-24">
                    <h1 className="text-4xl font-bold capitalize">{categoryName}</h1>
                </div>

                {/* Featured News (Clickable) */}
                {featuredNews && (
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative max-w-5xl mx-auto my-12 p-8 bg-white dark:bg-gray-800 shadow-lg dark:shadow-md rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => navigate(`/newsdetail/${featuredNews._id}`)}
                    >
                        <div className="h-[550px] w-full overflow-hidden rounded-lg">
                            <img
                                src={`http://localhost:3000/news_image/${featuredNews.image}`}
                                alt={featuredNews.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{featuredNews.title}</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                                Published at: {new Date(featuredNews.created_at).toLocaleString()}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg leading-relaxed">
                                {featuredNews.content.length > 200
                                    ? featuredNews.content.substring(0, 200) + "..."
                                    : featuredNews.content}
                            </p>
                        </div>
                    </motion.div>
                )}

                {/* Other News Cards (3 Per Row) */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-10">
                    {otherNews.map((news, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="cursor-pointer"
                            onClick={() => navigate(`/newsdetail/${news._id}`)}
                        >
                            <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 rounded-lg overflow-hidden h-full flex flex-col">
                                {/* Image Container */}
                                <div className="h-48 w-full overflow-hidden">
                                    <img
                                        src={`http://localhost:3000/news_image/${news.image}`}
                                        alt="News"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Content Section */}
                                <div className="p-4 flex flex-col flex-grow">
                                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{news.title}</h2>
                                    <p className="text-gray-700 dark:text-gray-300 flex-grow">
                                        {news.content.substring(0, 120) + "..."}
                                    </p>
                                    <div className="flex justify-end mt-2">
                                        <button className="px-4 py-2 border-2 border-[#101F3F] text-[#101F3F] dark:text-blue-400 hover:bg-[#101F3F] hover:text-white dark:hover:bg-blue-600 transition-colors rounded-lg">
                                            Read more
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Published on: {new Date(news.created_at).toLocaleString()}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default CategoryPage;
