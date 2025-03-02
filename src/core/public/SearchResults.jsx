import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../components/Card";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { useSearchNews } from "../public/query";

const SearchResults = () => {
    const { searchQuery } = useParams();
    const navigate = useNavigate();
    const { data: newsData, isLoading, isError } = useSearchNews(searchQuery);

    if (isLoading) return <div className="text-center mt-20 text-lg font-semibold dark:text-white">Loading...</div>;
    if (isError) return <div className="text-center mt-20 text-lg font-semibold text-red-500 dark:text-red-400">Error fetching search results.</div>;
    if (!newsData.length) return <div className="text-center mt-20 text-lg font-semibold dark:text-gray-400">No results found for "<span className="text-black dark:text-white">{searchQuery}</span>".</div>;

    return (
        <div className="bg-[#ecf0f1] dark:bg-gray-900 min-h-screen transition-all">
            <Navbar />

            <div className="p-6 mt-20">
                <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-6">
                    Search Results for "<span className="text-black dark:text-white">{searchQuery}</span>"
                </h1>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newsData.map((newsItem) => (
                        <div
                            key={newsItem._id}
                            onClick={() => navigate(`/newsdetail/${newsItem._id}`)}
                            className="cursor-pointer h-full"
                        >
                            <Card
                                title={newsItem.title}
                                description={newsItem.content.substring(0, 100) + "..."}
                                imageUrl={
                                    newsItem.image?.includes("http")
                                        ? newsItem.image
                                        : `http://localhost:3000/news_image/${newsItem.image}`
                                }
                                publishedAt={newsItem.created_at}
                                className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SearchResults;
