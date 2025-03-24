import React from 'react';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import Service from '../Service/Service';
import Pricing from '../Pricing/Pricing';
import ContactMe from '../Contact/Contact';
import ScriptAndScholars from "../scriptAndScholars/ScriptAndScholars";

const Home: React.FC = () => {
    return (
        <div style={{ padding: '0 1rem', margin: '1rem auto', maxWidth: '1200px', justifyContent: 'center', alignItems: 'center' }}>
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