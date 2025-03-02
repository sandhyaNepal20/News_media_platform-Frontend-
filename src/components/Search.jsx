import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim() !== "") {
            navigate(`/search/${searchTerm}`);
        }
    };

    return (
        <header
            className="relative bg-white dark:bg-gray-900 py-4 px-6 shadow-md transition-all"
            style={{
                height: "400px",
                backgroundImage: 'url(/src/assets/globe.jpg)',
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-60"></div>
            <div className="relative max-w-7xl mx-auto flex justify-center items-center h-full">
                <form className="flex items-center max-w-sm mx-auto w-2/3" onSubmit={handleSearch}>
                    <input
                        type="text"
                        id="simple-search"
                        className="bg-white dark:bg-gray-800 dark:text-white border border-black dark:border-gray-600 text-sm rounded-lg focus:ring-gray-500 focus:border-black block w-full ps-10 p-2.5"
                        placeholder="Search news..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="p-2.5 ms-2 text-sm font-medium text-white bg-gray-800 dark:bg-blue-600 rounded-lg border border-gray-800 dark:border-gray-600 hover:bg-gray-700 dark:hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-500"
                    >
                        🔍
                    </button>
                </form>
            </div>
        </header>
    );
};

export default Header;
