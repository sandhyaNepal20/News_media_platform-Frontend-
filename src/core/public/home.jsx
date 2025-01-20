import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Header() {
    const [active, setActive] = useState(false);
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [theme, setTheme] = useState("light-theme");

    let category = ["politics", "business", "health", "science", "sports", "technology"];

    // Effect to apply theme
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    // Toggle between light and dark theme
    function toggleTheme() {
        setTheme(prevTheme => prevTheme === "light-theme" ? "dark-theme" : "light-theme");
    }

    return (
        <div>
            <header>
                <nav className="fixed top-0 left-0 w-full h-auto bg-white z-10 flex items-center justify-between px-5 py-3">
                    {/* Logo */}
                    <img
                        src="src/assets/logo1.png"
                        alt="News Aggregator Logo"
                        className="md:basis-1/6 xs:basis-4/12 z-50"
                        style={{ maxWidth: "85px", maxHeight: "60px" }}
                    />

                    {/* Navigation Menu */}
                    <ul className={`nav-ul flex gap-14 justify-end ${active ? "active" : ""}`}>
                        <li>
                            <Link className="no-underline font-semibold text-black" to="/" onClick={() => setActive(false)}>
                                Home
                            </Link>
                        </li>
                        <li className="dropdown-li">
                            <Link
                                className="no-underline font-semibold flex items-center gap-2 text-black"
                                onClick={() => { setShowCategoryDropdown(!showCategoryDropdown); setActive(false); }}
                            >
                                Top-Headlines
                                <FontAwesomeIcon className={showCategoryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
                            </Link>
                            <ul className={showCategoryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
                                {category.map((element, index) => (
                                    <li key={index}>
                                        <Link
                                            to={`/top-headlines/${element}`}
                                            className="flex gap-3 capitalize text-black"
                                            onClick={() => setActive(false)}
                                        >
                                            {element}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <Link className="no-underline font-semibold flex items-center gap-2 text-black" to="/login">
                                Login/Signup
                            </Link>
                        </li>
                        <li>
                            <Link className="no-underline font-semibold text-black" to="#" onClick={toggleTheme}>
                                <input type="checkbox" className="checkbox" id="checkbox" />
                                <label htmlFor="checkbox" className="checkbox-label">
                                    <i className="fas fa-moon"></i>
                                    <i className="fas fa-sun"></i>
                                    <span className="ball"></span>
                                </label>
                            </Link>
                        </li>
                    </ul>

                    {/* Hamburger Menu */}
                    <div
                        className={`ham-burger ${active ? "ham-open" : ""}`}
                        onClick={() => setActive(!active)}
                    >
                        <span className="lines line-1"></span>
                        <span className="lines line-2"></span>
                        <span className="lines line-3"></span>
                    </div>
                </nav>
            </header>

            <main className="flex-grow bg-gray-100 py-8">
                <div className="container mx-auto px-4">
                    {/* Latest News Section */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6">Latest News</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Featured News */}
                            <div className="md:col-span-2">
                                <div className="relative">
                                    <img
                                        src="src/assets/news.jpg"
                                        alt="Featured News"
                                        className="w-full h-96 object-cover rounded-lg"
                                    />
                                    <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-4 rounded-b-lg">
                                        <h3 className="text-2xl font-bold">
                                            Syria’s rebels say they are encircling Damascus but army denies retreat
                                        </h3>
                                    </div>
                                </div>
                                <p className="mt-4 text-gray-700">
                                    Opposition fighters penetrated the town of Khaner in Damascus.
                                    Further attacks...
                                </p>
                            </div>

                            {/* Trending Headlines */}
                            <div>
                                <h3 className="text-xl font-bold mb-4">Trending Headlines</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center space-x-4">
                                        <img
                                            src="src/assets/news3.jpg"
                                            alt="Headline 1"
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <a
                                            href="#"
                                            className="text-black-700 hover:underline flex-grow"
                                        >
                                            U.S. drones targeted a location in Syria...
                                        </a>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <img
                                            src="src/assets/news3.jpg"
                                            alt="Headline 2"
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <a
                                            href="#"
                                            className="text-black-700 hover:underline flex-grow"
                                        >
                                            Mozart Portrait May Be Intelligence Suggestion...
                                        </a>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <img
                                            src="src/assets/news3.jpg"
                                            alt="Headline 3"
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <a
                                            href="#"
                                            className="text-black-700 hover:underline flex-grow"
                                        >
                                            Mozart Portrait May Be Intelligence Suggestion...
                                        </a>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <img
                                            src="src/assets/news3.jpg"
                                            alt="Headline 4"
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <a
                                            href="#"
                                            className="text-black-700 hover:underline flex-grow"
                                        >
                                            Mozart Portrait May Be Intelligence Suggestion...
                                        </a>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <img
                                            src="src/assets/news3.jpg"
                                            alt="Headline 5"
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <a
                                            href="#"
                                            className="text-black-700 hover:underline flex-grow"
                                        >
                                            Mozart Portrait May Be Intelligence Suggestion...
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Additional Sections */}
                    <section className="mt-12">
                        <h2 className="text-3xl font-bold mb-6">More News</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src="src/assets/news.jpg"
                                    alt="News 1"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">President Paudel discharged from hospital</h3>
                                    <p className="text-gray-600 mt-2">December 7, 2024</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src="src/assets/news.jpg"
                                    alt="News 2"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">Karnali Yaks clinch thrilling 7-run victory</h3>
                                    <p className="text-gray-600 mt-2">December 7, 2024</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src="src/assets/news.jpg"
                                    alt="News 3"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">Karnali Yaks clinch thrilling 7-run victory</h3>
                                    <p className="text-gray-600 mt-2">December 7, 2024</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-[#101F3F] to-[#1E2A47] rounded-lg shadow-md mt-auto">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="src/assets/logo.png" className="h-10" alt="Your Logo" />
                            <span className="self-center text-3xl font-semibold text-white hover:text-blue-400 transition duration-300">TrueLine News Media</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0 space-x-4">
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-white rounded hover:bg-[#1E2A47] transition duration-200"
                                >
                                    Politics
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-white rounded hover:bg-[#1E2A47] transition duration-200"
                                >
                                    Science & Tech
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-white rounded hover:bg-[#1E2A47] transition duration-200"
                                >
                                    Economy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-white rounded hover:bg-[#1E2A47] transition duration-200"
                                >
                                    Entertainment
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Header;
