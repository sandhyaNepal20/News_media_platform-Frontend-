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
    if (isLoading) return <div className="text-center mt-20 text-lg font-semibold">Loading...</div>;
    if (isError) return <div className="text-center mt-20 text-lg font-semibold text-red-500">Error fetching search results.</div>;
    if (!newsData.length) return <div className="text-center mt-20 text-lg font-semibold">No results found for "{searchQuery}".</div>;

    return (
        <div>
            <Navbar />

            <div>

                <div className="bg-[#ecf0f1] min-h-screen p-6 mt-20">
                    <h1 className="text-3xl font-bold text-center text-black mb-6">
                        Search Results for "<span className="text-black">{searchQuery}</span>"
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
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SearchResults;
