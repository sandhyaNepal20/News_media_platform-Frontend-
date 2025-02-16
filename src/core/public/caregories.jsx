import React from "react";
import Footer from "../../components/footer.jsx";
import Navbar from "../../components/navbar.jsx";
import News from "../../components/News.jsx";

const category = {
    id: "item1",
    imageUrl: "src/assets/news3.jpg",

    title: "Breaking News 1",
    description: "This is the latest update on the current event happening now.",
    publishedAt: "Feb 16, 2025",
};

const CategoryPage = () => {
    return (
        <div className="bg-white min-h-screen">

            <Navbar />


            <div className="w-full h-screen flex flex-col justify-center items-center bg-black relative">
                <img src={category.imageUrl} className="absolute w-full h-full object-cover opacity-50" alt={category.title} />
                <div className="relative z-10 text-center text-white px-6 md:px-12">
                    <h2 className="text-6xl font-bold mb-6">{category.title}</h2>
                    <p className="text-2xl mb-6">{category.description}</p>
                    <p className="text-lg text-gray-300">Published on: {category.publishedAt}</p>
                </div>
            </div>
            <News />

            <Footer />
        </div>

    );
};

export default CategoryPage;
