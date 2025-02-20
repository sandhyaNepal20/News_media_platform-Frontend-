import React from "react";
import { FaRegComment } from "react-icons/fa";
import Footer from "../../components/footer.jsx";
import Navbar from "../../components/navbar.jsx";

const NewsDetail = () => {
    return (
        <div>
            <Navbar />

            {/* Added padding to push the content downward */}
            <div className="max-w-4xl mx-auto p-6 pt-20">
                {/* Flex container for image and text */}
                <div className="relative mb-6">
                    {/* Image Section */}
                    <img
                        src="src/assets/news3.jpg" // Ensure the path is correct
                        alt="News Banner"
                        className="w-full h-auto object-contain rounded-lg"
                    />
                </div>

                {/* Title and Text Content */}
                <h1 className="text-3xl font-bold text-black">How Trump’s Return Could Benefit Mexico</h1>
                <p className="text-black text-sm mt-2">Published at Dec 6, 2024 19:33</p>

                <p className="mt-6 text-black leading-relaxed">
                    If Donald Trump’s plans to impose new tariffs on imports from Mexico lead to renewed talks over
                    immigration, crime, and trade, Mexicans should welcome the opportunity. After years of democratic
                    erosion under the former president, a different form of engagement with America may be just what
                    Mexico needs.
                </p>

                {/* Comments Section */}
                <div className="mt-8 border-t border-black pt-6">
                    <h2 className="text-xl font-semibold text-black mb-4">Comments</h2>
                    <div className="flex items-center  rounded-lg p-2">
                        <FaRegComment className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Type your comment here"
                            className="w-full p-2 outline-none text-black"
                        />
                        <button className="ml-2 px-4 py-2 bg-[#101F3F] text-white rounded-lg">Publish</button>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default NewsDetail;
