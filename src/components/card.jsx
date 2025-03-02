import { format } from "date-fns"; // For date formatting
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom for navigation

const Card = ({ title, description, imageUrl, publishedAt, articleUrl }) => {
    // Format the published date (assuming `publishedAt` is in ISO string format)
    const formattedDate = publishedAt ? format(new Date(publishedAt), "MMMM dd, yyyy") : "Unknown date";

    return (
        <div className="card bg-white dark:bg-gray-800 dark:border-gray-700 w-full h-full shadow-md dark:shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col">
            {/* Image Container */}
            <div className="h-48 w-full overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title} // Use title for better accessibility
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Card Body */}
            <div className="card-body flex flex-col justify-between text-black dark:text-white">
                <h2 className="card-title">{title}</h2>
                <p className="flex-grow dark:text-gray-300">{description}</p>
                <div className="card-actions justify-end">
                    {/* Assuming `articleUrl` is passed in props for linking */}
                    <Link to={articleUrl}>
                        <button className="px-4 py-2 border-2 border-[#101F3F] text-[#101F3F] dark:text-blue-400 hover:bg-[#101F3F] hover:text-white dark:hover:bg-blue-600 transition-colors rounded-lg">
                            Read more
                        </button>
                    </Link>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Published on: {formattedDate}</p>
            </div>
        </div>
    );
};

export default Card;
