import React from "react";
import Footer from "../../components/footer.jsx";
import Navbar from "../../components/navbar.jsx";
import News from "../../components/News.jsx";

const category = {
    id: "item1",
    imageUrl: "src/assets/news3.jpg", // Ensure this path is correct
    title: "Breaking News 1",
    description: "This is the latest update on the current event happening now. Stay tuned for more details as the situation evolves.",
    publishedAt: "Feb 16, 2025",
};

const CategoryPage = () => {
    return (
        <div>
            <Navbar />

            <div className="bg-[#ecf0f1] min-h-screen">

                {/* Title Section */}
                <div className="pt-6">
                    <div className="w-full  text-center h-40 flex justify-center items-center text-black">
                        <h1 className="text-4xl font-bold">{category.id}</h1>
                    </div>
                </div>

                {/* Image and Title Section with Text at the Bottom */}
                <div className="relative max-w-4xl mx-auto mb-6">
                    {/* Image Section */}
                    <img
                        src={category.imageUrl}
                        alt={category.title}
                        className="w-full h-auto object-contain rounded-lg"
                    />
                    {/* Title and Description at the Bottom of the Image */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                        <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                        <p className="text-gray-300 text-sm mt-2">Published at: {category.publishedAt}</p>
                        {/* Shortened description */}
                        <p className="text-gray-200 mt-4">
                            {category.description.length > 100 ? category.description.substring(0, 100) + "..." : category.description}
                        </p>
                    </div>
                </div>
                <News />

                <Footer />
            </div>
        </div>
    );
};

export default CategoryPage;
