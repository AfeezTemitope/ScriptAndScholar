import React from 'react';

const About: React.FC = () => {
    return (
        <div id="about" style={styles.about}>
            <h2>About Us</h2>
            <p>This is the About section. Add your content here.</p>
        </div>
    );
};

const styles = {
    about: {
        padding: '20px',
        backgroundColor: '#f4f4f4',
    },
};

export default About;
