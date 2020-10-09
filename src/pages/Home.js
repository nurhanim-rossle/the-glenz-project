import React from 'react';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer.js';
import SectionOne from '../components/SectionOne.js';
import SectionTwo from '../components/SectionTwo.js';
import SectionThree from '../components/SectionThree.js';
import SectionFour from '../components/SectionFour.js';

function Home() {
    return (
        <>
            <NavigationBar />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <Footer />
        </>
    )
}

export default Home;