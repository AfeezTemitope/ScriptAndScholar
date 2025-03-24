import { motion } from 'framer-motion';
import styles from './index.module.css';
import { FaLaptopCode, FaPaintBrush, FaSearch, FaFileAlt } from 'react-icons/fa';

const text = "WRITING - HUB";
const services = [
    { name: "Web Development", icon: <FaLaptopCode /> },
    { name: "Graphic Design", icon: <FaPaintBrush /> },
    { name: "SEO Optimization", icon: <FaSearch /> },
    { name: "Content Writing", icon: <FaFileAlt /> },
];

const ScriptAndScholars = () => {
    // Variants for the animation
    const letterVariants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -20 },
    };

    return (
        <div className={styles.bodyOf}>
            <div className={styles.leftSide}>
                <img
                    src="https://res.cloudinary.com/dgvjxhqjd/image/upload/v1742838711/5882a514-ea1b-4249-a154-6e4e19ff704c_removalai_preview_wrtlyq.png"
                    alt="script and scholar"
                    style={{ height: '80px', width: '80px' }}
                />
                <p>Script And Scholars</p>

                <div style={{ display: 'flex', fontWeight: '900', fontSize: '3rem' }}>
                    {text.split('').map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            initial="visible"
                            animate={{ opacity: [0, 1], y: [-20, 0] }}
                            transition={{
                                duration: 3,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: index * 0.5
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

            </div>

            {/*our service section*/}
            <div className={styles.servicesContainer}>
                <h2>OUR SERVICE</h2>
                <div className={styles.serviceList}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceItem}>
                            <span className={styles.icon}>{service.icon}</span>
                            <span className={styles.serviceName}>{service.name}</span>
                            {index < services.length - 1 && <div className={styles.line}></div>} {/* Line between items */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ScriptAndScholars;