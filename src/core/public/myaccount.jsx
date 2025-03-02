import { Camera } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer.jsx";
import Navbar from "../../components/navbar.jsx";

const MyAccount = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", email: "", avatar: "" });

    useEffect(() => {
        // Retrieve user data from localStorage
        const storedUser = localStorage.getItem("userData");

        if (storedUser && storedUser !== "null") {
            try {
                const userData = JSON.parse(storedUser);
                if (userData) {
                    setUser(userData);
                } else {
                    console.warn("User data not found in localStorage");
                }
            } catch (error) {
                console.error("Error parsing user data:", error);
                localStorage.removeItem("userData"); // Clear invalid data
            }
        } else {
            console.warn("No valid user data found in localStorage");
        }
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userData"); // Clear user data
        localStorage.removeItem("token"); // Clear authentication token
        window.dispatchEvent(new Event("storage")); // Ensure Navbar updates dynamically
        navigate("/");
    };

    // Function to handle image upload
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newUserData = { ...user, avatar: reader.result };
                setUser(newUserData);
                localStorage.setItem("userData", JSON.stringify(newUserData));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="bg-white dark:bg-gray-900 dark:text-white min-h-screen transition-all">
                <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6">
                    <h1 className="text-5xl font-bold mb-6">Account</h1>

                    {/* Avatar Section with Camera Icon */}
                    <div className="relative mb-4">
                        <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-2 overflow-hidden">
                            <img
                                src={user.avatar || "/src/assets/profile.png"} // Show uploaded image or default
                                alt="User Avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Camera Icon Button */}
                        <label htmlFor="avatarUpload" className="absolute bottom-0 right-0 bg-white dark:bg-gray-800 p-1 rounded-full shadow-md border dark:border-gray-600 cursor-pointer">
                            <Camera className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        </label>
                        <input
                            type="file"
                            id="avatarUpload"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </div>

                    {/* Display User Info */}
                    <p className="text-lg mb-4 border-b pb-2 w-full text-center">
                        You are signed in as <strong>{user.email || "Not Available"}</strong>.
                    </p>

                    <button
                        onClick={handleSignOut}
                        className="text-blue-600 dark:text-blue-400 font-semibold underline mb-8 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                        Sign Out
                    </button>

                    {/* Credentials Section */}
                    <div className="w-full max-w-2xl p-8 border dark:border-gray-700 rounded-lg shadow-md dark:shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Credentials</h2>
                        <form className="space-y-6">
                            <div className="border-b pb-4 dark:border-gray-700">
                                <label className="block text-gray-600 dark:text-gray-400 text-sm font-medium">E-mail</label>
                                <input
                                    type="email"
                                    value={user.email || ""}
                                    className="w-full p-2 border rounded-lg mt-2 bg-gray-100 dark:bg-gray-800 dark:text-white"
                                    readOnly
                                />
                            </div>

                            <div className="border-b pb-4 dark:border-gray-700">
                                <label className="block text-gray-600 dark:text-gray-400 text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    value={user.fullName || ""}
                                    className="w-full p-2 border rounded-lg mt-2 bg-gray-100 dark:bg-gray-800 dark:text-white"
                                    readOnly
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyAccount;
