import React from 'react';

const NavBar: React.FC = () => {
    type Styles = {
        text: React.CSSProperties;
        navi: React.CSSProperties;
        centeredNavBar: React.CSSProperties;
    };

    const styles: Styles = {
        text: {
            color: '#1f2937',
            fontSize: '0.875rem',
            fontWeight: 500,
            transition: 'color 0.2s',
        },
        navi: {
            position: 'sticky',
            top: 0,
            padding: '1rem',
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: '#1f2937',
        },
        centeredNavBar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            padding: '1rem 2rem',
            backgroundColor: 'white',
            borderRadius: '30px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            outline: '2px solid #e5e7eb',
            margin: '0 1rem',
        },
    };

    const mediaQueries = `  
    .nav-link {  
      color: #1f2937;  
      font-size: 0.875rem;  
      font-weight: 500;  
      transition: color 0.2s;  
    }  
    .nav-link:hover {  
      color: #4b5563;  
    }  
    @media (min-width: 768px) {  
      .nav-link {  
        font-size: 1rem;  
      }  
    }  
    @media (min-width: 1024px) {  
      .nav-link {  
        font-size: 1.125rem;  
      }  
    }  
  `;

    return (
        <>
            <style>{mediaQueries}</style>
            <div style={styles.navi}>
                <div style={{ flexShrink: 0 }}>
                    <img
                        src="https://assets-netstorage.groww.in/stock-assets/logos/GSTK512296.png"
                        alt="Logo"
                        style={{ height: '70px', width: '70px' }}
                    />
                </div>

                <div style={styles.centeredNavBar}>
                    {['About', 'Service', 'Pricing', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="nav-link"
                            style={styles.text}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default NavBar;
