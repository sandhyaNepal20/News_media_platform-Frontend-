import { Camera } from "lucide-react";
import React from "react";
import Footer from "../../components/footer.jsx";
import Navbar from "../../components/navbar.jsx";
const MyAccount = () => {
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

                <p className="text-lg mb-4 border-b pb-2 w-full text-center">
                    You are signed in as <strong>sandhyanepal54@gmail.com</strong>.
                </p>
                <button className="text-blue-600 font-semibold underline mb-8">Sign Out</button>

                {/* Credentials Section */}
                <div className="w-full max-w-2xl p-8 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Credentials</h2>
                    <form className="space-y-6">
                        <div className="border-b pb-4">
                            <label className="block text-gray-600 text-sm font-medium">E-mail</label>
                            <input
                                type="email"
                                value="sandhyanepal54@gmail.com"
                                className="w-full p-2 border rounded-lg mt-2 bg-gray-100"
                                readOnly
                            />
                        </div>

                        <div className="border-b pb-4">
                            <label className="block text-gray-600 text-sm font-medium">Password</label>
                            <button className="text-blue-600 underline">Change Password</button>
                        </div>

                        <div className="border-b pb-4">
                            <label className="block text-gray-600 text-sm font-medium">Username</label>
                            <input
                                type="text"
                                value="Your_Username"
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
