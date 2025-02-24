const Card = ({ title, description, imageUrl, publishedAt }) => {
    return (
        <div className="card bg-base-100 w-full h-full shadow-sm transform transition-transform duration-300 hover:scale-105 flex flex-col">
            {/* Image Container */}
            <div className="h-48 w-full overflow-hidden">
                <img src={imageUrl} alt="News" className="w-full h-full object-cover" />
            </div>
            {/* Card Body */}
            <div className="card-body flex flex-col justify-between text-black">
                <h2 className="card-title">{title}</h2>
                <p className="flex-grow">{description}</p>
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
