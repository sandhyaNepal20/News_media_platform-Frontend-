"use client";

function Home() {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <nav class="bg-[#101F3F]">
                    <div class="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
                        {/* <!-- Logo Section --> */}
                        <a href="#" class="flex items-center space-x-3">
                            <img src="src/assets/logo.png" alt="Logo" class="h-10 w-auto" />
                        </a>

                        {/* <!-- Desktop Navigation & Search --> */}
                        <div class="hidden md:flex items-center space-x-6">
                            <ul class="flex items-center space-x-6">
                                <li><a href="#" class="text-white hover:text-blue-400">Home</a></li>
                                <li><a href="#" class="text-white hover:text-blue-400">Politics</a></li>
                                <li><a href="#" class="text-white hover:text-blue-400">Science & Tech</a></li>
                                <li><a href="#" class="text-white hover:text-blue-400">Economy</a></li>
                                <li><a href="#" class="text-white hover:text-blue-400">Travel</a></li>
                                <li><a href="#" class="text-white hover:text-blue-400">Climate</a></li>
                                <li><a href="#" class="text-white hover:text-blue-400">Business</a></li>

                                {/* <!-- Login & Signup Categories --> */}
                                <li><a href="#login" class="text-white hover:text-blue-400">LogIn/SignUp</a></li>
                            </ul>

                            {/* <!-- Search Bar --> */}
                            <div class="relative">
                                <input
                                    type="text"
                                    class="w-48 px-3 py-2 text-sm text-white bg-[#101F3F] border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Search..."
                                />
                            </div>

                            {/* <!-- Notifications Dropdown --> */}
                            <div class="relative">
                                <button
                                    id="notification-toggle"
                                    class="text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    <svg
                                        class="w-6 h-6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C8.67 6.165 8 7.388 8 8.828v5.33a2.032 2.032 0 01-.595 1.435L6 17h5m4 0a3 3 0 11-6 0h6z"
                                        />
                                    </svg>
                                </button>

                                {/* <!-- Notifications Menu --> */}
                                <div
                                    id="notification-menu"
                                    class="hidden absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
                                >
                                    <ul class="py-1 text-gray-700">
                                        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">New comment on your post</a></li>
                                        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">3 new likes on your article</a></li>
                                        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Weekly newsletter is out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Hamburger Menu --> */}
                        <div class="md:hidden">
                            <button
                                type="button"
                                class="text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                                id="menu-toggle"
                            >
                                <svg
                                    class="w-6 h-6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* <!-- Mobile Navigation --> */}
                    <div class="hidden md:hidden" id="menu">
                        <ul class="space-y-2 p-4 bg-[#101F3F]">
                            <li><a href="#" class="block text-white hover:text-blue-400">Home</a></li>
                            <li><a href="#" class="block text-white hover:text-blue-400">Politics</a></li>
                            <li><a href="#" class="block text-white hover:text-blue-400">Science & Tech</a></li>
                            <li><a href="#" class="block text-white hover:text-blue-400">Economy</a></li>
                            <li><a href="#" class="block text-white hover:text-blue-400">Travel</a></li>
                            <li><a href="#" class="block text-white hover:text-blue-400">Climate</a></li>
                            <li><a href="#" class="block text-white hover:text-blue-400">Business</a></li>

                            {/* <!-- Mobile Login & Signup Categories --> */}
                            <li><a href="#login" class="block text-white hover:text-blue-400">Login</a></li>
                            <li><a href="#signup" class="block text-white hover:text-blue-400">Sign Up</a></li>
                        </ul>
                    </div>
                </nav>

                {/* <!-- JavaScript for Menu and Notification Toggling --> */}
                {/* <script>
    document.getElementById('menu-toggle').addEventListener('click', () => {
        const menu = document.getElementById('menu');
        menu.classList.toggle('hidden');
    });

    document.getElementById('notification-toggle').addEventListener('click', () => {
        const notificationMenu = document.getElementById('notification-menu');
        notificationMenu.classList.toggle('hidden');
    });
</script> */}




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
                                            src="src\assets\news.jpg"
                                            alt="Featured News"
                                            className="w-full h-96 object-cover rounded-lg"
                                        />
                                        <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-4 rounded-b-lg">
                                            <h3 className="text-2xl font-bold">
                                                Syria’s rebels say they are encircling Damascus but army denies
                                                retreat
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
                                                src="src\assets\news3.jpg"
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
                                                src="src\assets\news3.jpg"
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
                                                src="src\assets\news3.jpg"
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
                                                src="src\assets\news3.jpg"
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
                                                src="src\assets\news3.jpg"
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
                                                src="src\assets\news3.jpg"
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
                                        src="src\assets\news.jpg"
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
                                        src="src\assets\news.jpg"
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
                                        src="src\assets\news.jpg"
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
                                        src="src\assets\news.jpg"
                                        alt="News 2"
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


                {/* Footer ----------------------------------------------------------------*/}

                {/* Footer ----------------------------------------------------------------*/}

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
                                        Travel
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 text-white rounded hover:bg-[#1E2A47] transition duration-200"
                                    >
                                        Climate
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 text-white rounded hover:bg-[#1E2A47] transition duration-200"
                                    >
                                        Business
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <span className="block text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline text-blue-400">TrueLine News™</a>. All Rights Reserved.</span>
                    </div>
                </footer>

            </div>
        </>
    );
}

export default Home;
