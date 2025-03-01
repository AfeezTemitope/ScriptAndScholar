import React from 'react';

const Service: React.FC = () => {
    return (
        <div id="service" style={styles.service}>
            <h2>Our Services</h2>
            <p>This is the Services section. Add your content here.</p>
        </div>
    );
};

const styles = {
    service: {
        padding: '20px',
        backgroundColor: '#e2e2e2',
    },
};

export default Service;
