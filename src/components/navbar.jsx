import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    const [active, setActive] = useState(false); // Hamburger menu state
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false); // Dropdown visibility state
    const [selectedCategory, setSelectedCategory] = useState(null); // Selected category
    const category = ["Business", "Entertainment", "Health", "Science $ Tech", "Sports", "Politics"]; // Categories
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark"); // Retrieve from local storage

    let timeoutId = null; // For managing the timeout


    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            if (newMode) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
            return newMode;
        });
    };


    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleMouseEnter = () => {
        clearTimeout(timeoutId); // Clear any existing timeouts
        setShowCategoryDropdown(true); // Show dropdown immediately when hovered
    };

    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            setShowCategoryDropdown(false); // Hide after delay
        }, 200); // Adjust delay time if necessary
    };

    return (
        <header>
            <nav className="fixed top-0 left-0 w-full bg-white z-50 flex items-center justify-between px-5 py-4 shadow-md">
                {/* Logo */}
                <img
                    src="src/assets/logo1.png"
                    alt="News Aggregator Logo"
                    className="md:basis-1/6 xs:basis-4/12 z-50"
                    style={{ maxWidth: "75px", maxHeight: "60px" }}
                />

                {/* Navigation Menu */}
                <ul className={`nav-ul flex gap-14 justify-end ${active ? "active" : ""}`}>
                    <li>
                        <Link className="no-underline font-semibold text-black" to="/" onClick={() => setActive(false)}>
                            Home
                        </Link>
                    </li>
                    <li
                        className="relative"
                        onMouseEnter={handleMouseEnter} // Use custom mouse enter handler
                        onMouseLeave={handleMouseLeave} // Use custom mouse leave handler
                    >
                        <Link
                            className="no-underline font-semibold flex items-center gap-2 text-black"
                            onClick={() => setShowCategoryDropdown(true)} // Ensure dropdown stays open on click
                        >
                            {selectedCategory ? `${selectedCategory}` : 'Top-Headlines'}
                            <FontAwesomeIcon className={showCategoryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
                        </Link>
                        <ul className={showCategoryDropdown ? "dropdown p-2 show-dropdown absolute left-0 top-full bg-white shadow-lg rounded-lg" : "dropdown p-2 hidden"}>
                            {category.map((element, index) => (
                                <li key={index}>
                                    <Link
                                        to="/category"
                                        className="flex gap-3 capitalize text-black"
                                        onClick={() => handleCategoryClick(element)}
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
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" checked={darkMode} onChange={toggleTheme} />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 dark:bg-gray-700">
                                <div className={`absolute top-0.5 left-1 bg-white w-5 h-5 rounded-full transition-transform ${darkMode ? "translate-x-5" : ""}`}></div>
                            </div>
                        </label>
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
    );
}

export default Navbar;
