import React from 'react';

const Contact: React.FC = () => {
    return (
        <div id="contact" style={styles.contact}>
            <h2>Contact Us</h2>
            <p>This is the Contact section. Add your content here.</p>
        </div>
    );
};

const styles = {
    contact: {
        padding: '20px',
        backgroundColor: '#c2c2c2',
    },
};

export default Contact;
