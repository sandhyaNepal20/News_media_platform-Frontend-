import React, { useEffect, useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer.jsx";
import Navbar from "../../components/navbar.jsx";
import { useGetCategory, useNewsGetById } from "../public/query.js";

const NewsDetail = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useNewsGetById(id);
    const { data: categories } = useGetCategory();

    const [categoryName, setCategoryName] = useState("");

    useEffect(() => {
        if (data?.data && categories?.data) {
            const news = data.data;
            const category = categories.data.find(cat => cat._id === news.categoryId);
            if (category) {
                setCategoryName(category.name);
            }
        }
    }, [data, categories]);

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleCommentSubmit = () => {
        if (comment.trim() !== "") {
            setComments([...comments, comment]);
            setComment(""); // Clear input after submission
        }
    };

    if (isLoading) return <p className="text-center mt-10 text-lg">Loading news details...</p>;
    if (error) return <p className="text-center mt-10 text-red-500">Error fetching news.</p>;
    if (!data?.data) return <p className="text-center mt-10 text-gray-500">News not found.</p>;

    const news = data.data;

    return (
        <div>
            <Navbar />
            <div className="bg-white min-h-screen">
                <div className="max-w-4xl mx-auto p-6 pt-20">
                    {/* Category Name Section */}
                    {categoryName && (
                        <div className="w-full text-center mb-6">
                            <h2 className="text-3xl font-bold text-gray-800 capitalize">
                                {categoryName}
                            </h2>
                        </div>
                    )}

                    <div className="relative mb-6">
                        <img
                            src={news.image ? `http://localhost:3000/news_image/${news.image}` : "src/assets/news-placeholder.jpg"}
                            alt="News Banner"
                            className="w-full h-auto object-contain rounded-lg"
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-black">{news.title}</h1>

                    <p className="text-black text-sm mt-2">
                        Published at {new Date(news.created_at).toLocaleString()}
                    </p>

                    <p className="mt-6 text-black leading-relaxed">{news.content}</p>

                    {/* Comments Section */}
                    <div className="mt-8 border-t border-black pt-6">
                        <h2 className="text-xl font-semibold text-black mb-4">Comments</h2>
                        <div className="flex items-center bg-gray-100 rounded-lg p-2">
                            <FaRegComment className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Type your comment here"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="w-full p-2 outline-none text-black bg-transparent"
                            />
                            <button
                                onClick={handleCommentSubmit}
                                className="ml-2 px-4 py-2 bg-[#101F3F] text-white rounded-lg disabled:opacity-50"
                                disabled={!comment.trim()}
                            >
                                Publish
                            </button>
                        </div>

                        {/* Render Comments */}
                        {comments.length > 0 && (
                            <div className="mt-4">
                                {comments.map((cmt, index) => (
                                    <p key={index} className="text-gray-800 border-b border-gray-300 py-2">
                                        {cmt}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NewsDetail;
