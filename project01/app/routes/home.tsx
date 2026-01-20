import React from "react";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import Section01 from "~/components/Section01";
import Section02 from "~/components/Section02";
import Section03 from "~/components/Section03";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Section01 />
            <Section02 />
            <Section03 />
            <Footer />
        </>
    );
}

export default Home;
