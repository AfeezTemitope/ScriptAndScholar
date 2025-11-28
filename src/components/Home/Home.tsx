import React from 'react';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import Service from '../Service/Service';
import Pricing from '../Pricing/Pricing';
import ContactMe from '../Contact/Contact';
import ScriptAndScholars from "../scriptAndScholars/ScriptAndScholars";

const Home: React.FC = () => {
    return (
        <div>
            <NavBar />
            <ScriptAndScholars />
            <About />
            <Service />
            <Pricing />
            <ContactMe />
        </div>
    );
};

export default Home;