import styles from './index.module.css';

const NavBar = () => {
    return (
        <div className={styles.navi}>
            <div style={{ flexShrink: 0 }}>
                <img
                    src="https://res.cloudinary.com/dgvjxhqjd/image/upload/v1742836697/bc84564d-727d-4dab-8398-92e2acb06abf_removalai_preview_xnkf7r.png"
                    alt="Logo"
                    style={{ height: '60px', width: '60px' }}
                />
            </div>

            <div className={styles.centeredNavBar}>
                {['About', 'Service', 'Pricing', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className={styles['nav-link']}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default NavBar;