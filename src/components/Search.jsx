import React, { useState } from 'react';
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
            className="bg-white py-4 px-6 shadow-md"
            style={{
                height: '400px',
                backgroundImage: 'url(/src/assets/globe.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
                <form className="flex items-center max-w-sm mx-auto w-2/3" onSubmit={handleSearch}>
                    <input
                        type="text"
                        id="simple-search"
                        className="bg-white border border-black text-black text-sm rounded-lg focus:ring-gray-500 focus:border-black block w-full ps-10 p-2.5"
                        placeholder="Search news..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="p-2.5 ms-2 text-sm font-medium text-white bg-gray-800 rounded-lg border border-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-500"
                    >
                        🔍
                    </button>
                </form>
            </div>
        </header>
    );
};

export default Header;
