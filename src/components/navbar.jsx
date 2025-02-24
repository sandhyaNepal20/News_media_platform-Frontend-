import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";
import { useGetCategory } from "../core/public/query";

function Navbar() {
    const [active, setActive] = useState(false);
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isLoggedIn") === "true");

    const navigate = useNavigate();
    let timeoutId = null;

    // Fetch categories using react-query
    const { data, isLoading, isError } = useGetCategory();

    // Listen for login/logout changes
    useEffect(() => {
        const handleStorageChange = () => {
            setIsAuthenticated(localStorage.getItem("isLoggedIn") === "true");
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userData");
        setIsAuthenticated(false);

        // Dispatch event to notify Navbar and other components
        window.dispatchEvent(new Event("storage"));

        navigate("/");
    };

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
        setDarkMode((prevMode) => !prevMode);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleMouseEnter = () => {
        clearTimeout(timeoutId);
        setShowCategoryDropdown(true);
    };

    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            setShowCategoryDropdown(false);
        }, 200);
    };

    return (
        <header>
            <nav className="fixed top-0 left-0 w-full bg-white z-50 flex items-center justify-between px-5 py-4 shadow-md">
                {/* Logo */}
                <img src={logo} alt="Logo" style={{ maxWidth: "75px", maxHeight: "60px" }} />

                {/* Navigation Menu */}
                <ul className={`nav-ul flex gap-14 justify-end ${active ? "active" : ""}`}>
                    <li>
                        <Link className="no-underline font-semibold text-black" to="/" onClick={() => setActive(false)}>
                            Home
                        </Link>
                    </li>
                    <li
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link
                            className="no-underline font-semibold flex items-center gap-2 text-black"
                            onClick={() => setShowCategoryDropdown(true)}
                        >
                            {selectedCategory ? selectedCategory : "Top-Headlines"}
                            <FontAwesomeIcon
                                className={showCategoryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"}
                                icon={faCircleArrowDown}
                            />
                        </Link>
                        <ul className={showCategoryDropdown ? "dropdown p-2 show-dropdown absolute left-0 top-full bg-white shadow-lg rounded-lg" : "dropdown p-2 hidden"}>
                            {isLoading ? (
                                <li className="text-gray-500">Loading...</li>
                            ) : isError ? (
                                <li className="text-red-500">Error loading categories</li>
                            ) : (
                                data?.data?.map((categoryItem, index) => (
                                    <li key={index}>
                                        <Link
                                            to={`/category/${categoryItem.name}`}
                                            className="flex gap-3 capitalize text-black"
                                            onClick={() => handleCategoryClick(categoryItem.name)}
                                        >
                                            {categoryItem.name}
                                        </Link>
                                    </li>
                                ))
                            )}
                        </ul>
                    </li>

                    {/* Show My Account if authenticated, else show Login/Signup */}
                    <li>
                        {!isAuthenticated ? (
                            <Link className="no-underline font-semibold flex items-center gap-2 text-black" to="/login">
                                Login/Signup
                            </Link>
                        ) : (
                            <div className="relative group">
                                <Link className="no-underline font-semibold flex items-center gap-2 text-black" to="/myaccount">
                                    My Account
                                </Link>

                            </div>
                        )}
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
