import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetNews } from "../core/public/query";
import Card from "./Card"; // Ensure correct path

const News = () => {
    const navigate = useNavigate();
    const { data, isLoading, error } = useGetNews();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center mt-10">
                <p className="text-red-500">Failed to load news. Try again later.</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                    Retry
                </button>
            </div>
        );
    }

    const newsList = data?.data || [];

    return (
        <section className="py-8">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-black mb-6">Latest News</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newsList.length > 0 ? (
                        newsList.map((newsItem) => (
                            <div
                                key={newsItem._id}
                                onClick={() => navigate(`/newsdetail/${newsItem._id}`)}
                                className="cursor-pointer"
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
                                />
                            </div>
                        ))
                    ) : (
                        <p className="col-span-3 text-center text-gray-500">No news available.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default News;
