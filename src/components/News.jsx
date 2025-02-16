// News.jsx
import React from "react";
import Card from "./Card"; // Assuming you have a Card component

const News = () => {
    return (
        <section className="py-8">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-black mb-6">Latest News</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card
                        title="Card Title 1"
                        description="This is a description for the first card."
                        imageUrl="src\assets\news3.jpg"
                        publishedAt="2025-02-16"
                    />
                    <Card
                        title="Card Title 2"
                        description="This is a description for the second card."
                        imageUrl="src\assets\news.jpg"
                        publishedAt="2025-02-15"
                    />
                    <Card
                        title="Card Title 3"
                        description="This is a description for the third card."
                        imageUrl="src\assets\news.jpg"
                        publishedAt="2025-02-14"
                    />
                </div>
            </div>
        </section>
    );
};

export default News;
