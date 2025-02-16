import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    const [active, setActive] = useState(false); // Hamburger menu state
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false); // Dropdown visibility state
    const [selectedCategory, setSelectedCategory] = useState(null); // Selected category
    const category = ["business", "entertainment", "health", "science", "sports", "technology"]; // Categories

    let timeoutId = null; // For managing the timeout

    const toggleTheme = () => {
        console.log("Theme toggled!");
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
                            {selectedCategory ? `Top-Headlines: ${selectedCategory}` : 'Top-Headlines'}
                            <FontAwesomeIcon className={showCategoryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
                        </Link>
                        <ul className={showCategoryDropdown ? "dropdown p-2 show-dropdown absolute left-0 top-full bg-white shadow-lg rounded-lg" : "dropdown p-2 hidden"}>
                            {category.map((element, index) => (
                                <li key={index}>
                                    <Link
                                        to={`/top-headlines/${element}`}
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
    );
}

export default Navbar;
