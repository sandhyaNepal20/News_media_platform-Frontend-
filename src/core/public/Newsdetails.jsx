import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs"; // Three-dot menu icon
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
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState(null);
    const [openMenu, setOpenMenu] = useState(null); // Track open menu for each comment

    useEffect(() => {
        // Retrieve user data from localStorage
        const storedUser = localStorage.getItem("userData");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
            } catch (error) {
                console.error("Error parsing user data:", error);
            }
        }

        // Retrieve comments for this news article from localStorage
        const storedComments = localStorage.getItem(`comments_${id}`);
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
    }, [id]);

    useEffect(() => {
        if (data?.data && categories?.data) {
            const news = data.data;
            const category = categories.data.find(cat => cat._id === news.categoryId);
            if (category) {
                setCategoryName(category.name);
            }
        }
    }, [data, categories]);

    const handleCommentSubmit = () => {
        if (comment.trim() !== "" && user) {
            const newComment = {
                id: new Date().getTime(),
                text: comment,
                userName: user.fullName || "Anonymous",
                userAvatar: user.avatar ? user.avatar : "/src/assets/profile.png",
                userEmail: user.email, // Store email to check ownership
            };

            const updatedComments = [...comments, newComment];
            setComments(updatedComments);
            setComment("");

            // Store the updated comments in localStorage
            localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments));
        } else {
            alert("You need to be logged in to comment.");
        }
    };

    const handleDeleteComment = (commentId, commentUserEmail) => {
        if (user?.email === commentUserEmail) {
            const updatedComments = comments.filter(cmt => cmt.id !== commentId);
            setComments(updatedComments);
            localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments));
        } else {
            alert("You can only delete your own comments.");
        }
    };

    const handleSaveComment = (text) => {
        alert(`Comment saved: "${text}"`);
    };

    const handleShareComment = (text) => {
        navigator.clipboard.writeText(text);
        alert("Comment copied to clipboard!");
    };

    if (isLoading) return <p className="text-center mt-10 text-lg dark:text-white">Loading news details...</p>;
    if (error) return <p className="text-center mt-10 text-red-500 dark:text-red-400">Error fetching news.</p>;
    if (!data?.data) return <p className="text-center mt-10 text-gray-500 dark:text-gray-400">News not found.</p>;

    const news = data.data;

    return (
        <div>
            <Navbar />

            <div className="bg-white dark:bg-gray-900 dark:text-white min-h-screen transition-all">
                <div className="max-w-4xl mx-auto p-6 pt-20">
                    {categoryName && (
                        <div className="w-full text-center mb-6">
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-white capitalize">
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
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{news.title}</h1>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                        Published at {new Date(news.created_at).toLocaleString()}
                    </p>

                    <p className="mt-6 text-gray-800 dark:text-gray-300 leading-relaxed">{news.content}</p>

                    {/* Comments Section */}
                    <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-6">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Comments</h2>
                        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-2">
                            <FaRegComment className="text-gray-400 dark:text-gray-500 mr-2" />
                            <input
                                type="text"
                                placeholder="Type your comment here"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="w-full p-2 outline-none bg-transparent text-gray-900 dark:text-white"
                            />
                            <button
                                onClick={handleCommentSubmit}
                                className="ml-2 px-4 py-2 bg-[#101F3F] text-white rounded-lg dark:bg-blue-700 dark:hover:bg-blue-600 disabled:opacity-50"
                                disabled={!comment.trim()}
                            >
                                Publish
                            </button>
                        </div>

                        {/* Render Comments */}
                        {comments.length > 0 && (
                            <div className="mt-4 space-y-4">
                                {comments.map((cmt) => (
                                    <div key={cmt.id} className="flex items-center space-x-3 border-b border-gray-300 dark:border-gray-700 py-2 relative">
                                        {/* Three-dot menu */}
                                        <BsThreeDotsVertical
                                            className="absolute right-0 top-2 text-black dark:text-white cursor-pointer"
                                            onClick={() => setOpenMenu(openMenu === cmt.id ? null : cmt.id)}
                                        />


                                        {/* Dropdown Menu */}
                                        {openMenu === cmt.id && (
                                            <div className="absolute right-5 top-2 bg-white dark:bg-gray-800 shadow-lg rounded-md w-28 text-sm">
                                                {user?.email === cmt.userEmail && (
                                                    <button onClick={() => handleDeleteComment(cmt.id, cmt.userEmail)} className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 w-full text-left">
                                                        Delete
                                                    </button>
                                                )}
                                                <button onClick={() => handleSaveComment(cmt.text)} className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 w-full text-left">
                                                    Save
                                                </button>
                                                <button onClick={() => handleShareComment(cmt.text)} className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 w-full text-left">
                                                    Share
                                                </button>
                                            </div>
                                        )}

                                        {/* User Avatar and Comment */}
                                        <img src={cmt.userAvatar} alt="User Avatar" className="w-12 h-12 rounded-full object-cover border border-gray-300 dark:border-gray-600" />
                                        <div>
                                            <p className="text-gray-900 dark:text-white font-semibold">{cmt.userName}</p>
                                            <p className="text-gray-800 dark:text-gray-300">{cmt.text}</p>
                                        </div>
                                    </div>
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
