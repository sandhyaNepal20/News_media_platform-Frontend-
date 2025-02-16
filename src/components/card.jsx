import React from "react";

const Card = ({ title, description, imageUrl, publishedAt }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img src={imageUrl} alt="News" />
            </figure>
            <div className="card-body text-black"> {/* Added text-black here */}
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn border-2 border-[#101F3F] text-[#101F3F] hover:bg-[#101F3F] hover:text-white transition-colors">
                        Read more
                    </button>
                </div>
                <p className="text-sm text-gray-500">Published on: {publishedAt}</p>
            </div>
        </div>
    );
};

export default Card;
