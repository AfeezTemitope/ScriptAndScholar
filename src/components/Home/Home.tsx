import React from 'react';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import Service from '../Service/Service';
import Pricing from '../Pricing/Pricing';
import ContactMe from '../Contact/Contact';

const Home: React.FC = () => {
    return (
        <div className="relative h-screen">
            <NavBar />
            <About />
            <Service />
            <Pricing />
            <ContactMe />
        </div>
    );
};

export default Home;
