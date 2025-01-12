"use client";

function Home() {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <nav className="bg-[#101F3F] border-gray-200 dark:bg-[#101F3F]">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        {/* Logo */}
                        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="src/assets/logo.png" className="h-18 w-[90px]" alt="Flowbite Logo" />
                        </a>

                        {/* Right Section: Search Bar, Notification Icon, Hamburger Menu */}
                        <div className="flex items-center space-x-4 md:order-2">
                            {/* Search Bar */}
                            <div className="relative hidden md:block">
                                <input
                                    type="text"
                                    id="search-navbar"
                                    className="block w-48 p-2 text-sm text-white bg-[#101F3F] border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-[#101F3F] dark:text-white dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search..."
                                />
                            </div>

                            {/* Notification Icon */}
                            <button
                                type="button"
                                className="relative text-white focus:outline-none hover:text-blue-400"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11c0-3.14-1.64-5.697-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.64 5.303 6 7.86 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h11z"
                                    />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 21a2 2 0 01-4 0" />
                                </svg>
                                {/* Notification Badge */}
                                {/* <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                                    3
                                </span> */}
                            </button>

                            {/* Hamburger Menu */}
                            <button
                                data-collapse-toggle="navbar-default"
                                type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#101F3F] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-[#101F3F] dark:focus:ring-gray-600"
                                aria-controls="navbar-default"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Navigation Menu */}
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#101F3F] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#101F3F] dark:border-gray-700">
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                        aria-current="page"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 text-white rounded hover:bg-[#101F3F] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-[#101F3F] dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        Politics
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 text-white rounded hover:bg-[#101F3F] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-[#101F3F] dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        Science & Tech
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 text-white rounded hover:bg-[#101F3F] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-[#101F3F] dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        Economy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 text-white rounded hover:bg-[#101F3F] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-[#101F3F] dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        Travel
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 text-white rounded hover:bg-[#101F3F] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-[#101F3F] dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        Climate
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 text-white rounded hover:bg-[#101F3F] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-[#101F3F] dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        Business
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-3 text-white rounded hover:bg-[#101F3F] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-[#101F3F] dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        LogIn/SignUp
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


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
