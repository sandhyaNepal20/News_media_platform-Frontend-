import React from 'react';

const Header = () => {
    return (
        <header
            className="bg-white py-4 px-6 shadow-md"
            style={{
                height: '400px',
                backgroundImage: 'url(/src/assets/globe.jpg)',// Add your image URL here
                backgroundSize: 'cover', // Make sure the background covers the entire header
                backgroundPosition: 'center', // Center the image
            }}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
                {/* Logo or Platform Name */}
                {/* You can add your logo here */}

                {/* Search Form */}
                <form className="flex items-center max-w-sm mx-auto w-2/3">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-black"  // Black icon color
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="simple-search"
                            className="bg-white border border-black text-black text-sm rounded-lg focus:ring-gray-500 focus:border-black block w-full ps-10 p-2.5"  // White background, black border and text
                            placeholder="Search news..."
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="p-2.5 ms-2 text-sm font-medium text-white bg-gray-800 rounded-lg border border-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-500"
                    >
                        <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </form>
            </div>
        </header>
    );
};

export default Header;
