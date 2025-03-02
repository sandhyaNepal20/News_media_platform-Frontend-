import React, { useEffect, useState } from "react";
import Footer from "../../components/footer.jsx";
import Navbar from "../../components/navbar.jsx";
import News from "../../components/News.jsx";
import Header from "../../components/Search.jsx";

function Home() {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate News Loading Time
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Simulated 2-second delay
    }, []);

    return (
        <div>            <Navbar />
            <div>
                <div className="bg-white dark:bg-gray-900 dark:text-white min-h-screen transition-all">
                    <Header />

                    {/* Show Loader While News is Loading */}
                    {isLoading ? (
                        <div className="flex items-center justify-center h-screen">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500 dark:border-white"></div>
                        </div>
                    ) : (
                        <News />
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;
