import { Camera } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer.jsx";
import Navbar from "../../components/navbar.jsx";

const MyAccount = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", email: "" });

    useEffect(() => {
        // Retrieve user data from localStorage
        const storedUser = localStorage.getItem("userData");
        console.log("Stored UserData in localStorage:", storedUser); // Debugging log

        if (storedUser && storedUser !== "null") {  // ✅ Ensure it's not null
            try {
                const userData = JSON.parse(storedUser);
                console.log("Parsed UserData:", userData); // Debugging log

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

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-6">
                <h1 className="text-5xl font-bold mb-6">Account</h1>

                {/* Avatar Section with Camera Icon */}
                <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-2 overflow-hidden">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            alt="User Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Camera Icon Button */}
                    <button className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md border">
                        <Camera className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

                {/* Display User Info */}
                <p className="text-lg mb-4 border-b pb-2 w-full text-center">
                    You are signed in as <strong>{user.email || "Not Available"}</strong>.
                </p>
                {/* <p className="text-lg mb-4 border-b pb-2 w-full text-center">
                    Name: <strong>{user.name || "Not Available"}</strong>
                </p> */}

                <button onClick={handleSignOut} className="text-blue-600 font-semibold underline mb-8">
                    Sign Out
                </button>

                {/* Credentials Section */}
                <div className="w-full max-w-2xl p-8 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Credentials</h2>
                    <form className="space-y-6">
                        <div className="border-b pb-4">
                            <label className="block text-gray-600 text-sm font-medium">E-mail</label>
                            <input
                                type="email"
                                value={user.email || ""}
                                className="w-full p-2 border rounded-lg mt-2 bg-gray-100"
                                readOnly
                            />
                        </div>

                        <div className="border-b pb-4">
                            <label className="block text-gray-600 text-sm font-medium">Name</label>
                            <input
                                type="text"
                                value={user.name || ""}
                                className="w-full p-2 border rounded-lg mt-2 bg-gray-100"
                                readOnly
                            />
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyAccount;
