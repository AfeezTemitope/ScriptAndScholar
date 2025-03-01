import React from 'react';

const Pricing: React.FC = () => {
    return (
        <div id="pricing" style={styles.pricing}>
            <h2>Pricing</h2>
            <p>This is the Pricing section. Add your content here.</p>
        </div>
    );
};

const styles = {
    pricing: {
        padding: '20px',
        backgroundColor: '#d2d2d2',
    },
};

export default Pricing;
