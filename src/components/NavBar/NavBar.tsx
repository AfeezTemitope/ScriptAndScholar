import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav style={styles.nav}>
            <ul style={styles.ul}>
                <li style={styles.li}><a href="#about">About</a></li>
                <li style={styles.li}><a href="#service">Service</a></li>
                <li style={styles.li}><a href="#pricing">Pricing</a></li>
                <li style={styles.li}><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        backgroundColor: '#333',
        padding: '10px',
    },
    ul: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        margin: 0,
        padding: 0,
    },
    li: {
        color: 'white',
    },
};

export default NavBar;
