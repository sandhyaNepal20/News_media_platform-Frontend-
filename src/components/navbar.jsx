import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    // State variables
    const [active, setActive] = useState(false); // For the hamburger menu
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false); // For the dropdown menu
    const [selectedCategory, setSelectedCategory] = useState(null); // For selected category
    const [theme, setTheme] = useState("light-theme"); // For theme toggle

    const category = ["business", "politics", "science", "sports", "technology"]; // Example categories
    // Apply the theme to the body class
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    // Toggle theme between light and dark
    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme === "light-theme" ? "dark-theme" : "light-theme"
        );
    };


    const handleCategoryClick = (category) => {
        setSelectedCategory(category); // Set the selected category
        setShowCategoryDropdown(false); // Close the dropdown after selection
    };

    return (
        <header>
            <nav className="fixed top-0 left-0 w-full h-auto bg-white z-10 flex items-center justify-between px-5 py-3">
                {/* Logo */}
                <img
                    src="src/assets/logo1.png"
                    alt="Logo"
                    className="md:basis-1/6 xs:basis-4/12 z-50"
                    style={{ maxWidth: "85px", maxHeight: "75px" }}
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
                        onMouseEnter={() => setShowCategoryDropdown(true)} // Show dropdown on hover
                        onMouseLeave={() => setShowCategoryDropdown(false)} // Hide dropdown on hover out
                    >
                        <Link
                            className="no-underline font-semibold flex items-center gap-2 text-black"
                            to="#"
                            onClick={() => setActive(false)}
                        >
                            {selectedCategory ? `Top-Headlines: ${selectedCategory}` : 'Top-Headlines'}
                            <FontAwesomeIcon className={showCategoryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
                        </Link>

                        {/* Dropdown Menu */}
                        <ul className={showCategoryDropdown ? "dropdown p-2 show-dropdown absolute left-0 top-full bg-white shadow-lg rounded-lg" : "dropdown p-2 hidden"}>
                            {category.map((element, index) => (
                                <li key={index}>
                                    <Link
                                        to={`/top-headlines/${element}`}
                                        className={`flex gap-3 capitalize text-black p-2 ${selectedCategory === element ? 'bg-gray-300' : ''}`}
                                        onClick={() => handleCategoryClick(element)} // Set the selected category and close dropdown
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
                    {/* Theme Toggle */}
                    <li>
                        <Link
                            className="no-underline font-semibold text-white"
                            to="#"
                            onClick={toggleTheme}
                        >
                            <input
                                type="checkbox"
                                className="checkbox"
                                id="checkbox"
                            />
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
    );
}

export default Navbar;
