"use client";

function Home() {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <nav className="bg-[#101F3F] border-gray-200 dark:bg-[#101F3F]">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="src/assets/logo.png" className="h-24 w-[90px]" alt="Flowbite Logo" />
                        </a>
                        <div className="flex items-center space-x-4 md:order-2">
                            {/* Search bar */}
                            <div className="relative hidden md:block">
                                <input
                                    type="text"
                                    id="search-navbar"
                                    className="block w-48 p-2 text-sm text-white bg-[#101F3F] border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-[#101F3F] dark:text-white dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search..."
                                />
                            </div>
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
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </button>
                        </div>
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

                <main className="flex-grow">
                    {/* Main content goes here */}
                </main>

                {/* Footer ----------------------------------------------------------------*/}

                <footer className="bg-[#101F3F] rounded-lg shadow dark:bg-[#101F3F] mt-auto">
                    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                                <img src="src/assets/logo.png" className="h-8" alt="Your Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">TrueLine News Media</span>
                            </a>
                            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
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

                            </ul>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <span className="block text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">TrueLine News™</a>. All Rights Reserved.</span>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Home;
