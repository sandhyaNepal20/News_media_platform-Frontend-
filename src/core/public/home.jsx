import React from "react";
import Footer from "../../components/footer.jsx";
import Navbar from "../../components/navbar.jsx";
import News from "../../components/News.jsx";
import Header from "../../components/Search.jsx";


function Home() {

    return (

        <div className="bg-white min-h-screen">

            <Navbar />

            <Header />

            <News />
            <Footer />
        </div>

    );

}

export default Home;