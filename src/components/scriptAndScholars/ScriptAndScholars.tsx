import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaPaintBrush, FaSearch, FaFileAlt } from 'react-icons/fa';

const text = "WRITING - HUB";
const services = [
    { name: "Web Development", icon: FaLaptopCode },
    { name: "Graphic Design", icon: FaPaintBrush },
    { name: "SEO Optimization", icon: FaSearch },
    { name: "Content Writing", icon: FaFileAlt },
];

const ScriptAndScholars: React.FC = () => {
    return (
        <section className="w-full min-h-screen flex items-center justify-center py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-evenly gap-12 md:gap-16 lg:gap-20 xl:gap-24">

                {/* Left Side - Logo and Title */}
                <article className="flex flex-col items-center justify-center text-center flex-1 space-y-4 md:space-y-6 lg:space-y-8 px-4">
                    <img
                        src="/ss.png"
                        alt="Script and Scholars Logo"
                        className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28
                                   lg:h-40 lg:w-40 xl:h-48 xl:w-48 object-contain"
                    />

                    <h2 className="text-gray-700 text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
                        Script And Scholars
                    </h2>

                    <div className="flex flex-wrap justify-center
                        text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                        font-bold lg:font-extrabold xl:font-bold
                        text-gray-900 leading-tight">
                        {text.split('').map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{
                                    opacity: [0, 1, 1, 0],
                                    y: [-20, 0, 0, -20]
                                }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    delay: index * 0.1,
                                    repeatDelay: 1
                                }}
                                className="inline-block"
                            >
                                {letter === ' ' ? '\u00A0' : letter === '-' ? '-' : letter}
                            </motion.span>
                        ))}
                    </div>
                </article>

                {/* Right Side - Services */}
                <article className="flex-1 w-full max-w-md lg:max-w-lg px-4">
                    <header className="mb-8 md:mb-10 lg:mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold text-blue-900 tracking-tight">
                            OUR SERVICES
                        </h2>
                    </header>

                    <nav className="flex flex-col space-y-2" role="list">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div key={index} className="relative">
                                    <div className="flex items-center gap-4 md:gap-5 py-5 md:py-6 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-lg px-3 transition-all duration-300 cursor-pointer group">
                                        <div className="flex-shrink-0 text-3xl md:text-4xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-300">
                                            <IconComponent />
                                        </div>
                                        <span className="text-lg sm:text-xl md:text-2xl font-medium">
                                            {service.name}
                                        </span>
                                    </div>

                                    {index < services.length - 1 && (
                                        <div className="absolute left-8 md:left-9 top-full w-0.5 h-6 bg-gradient-to-b from-gray-400 to-transparent" />
                                    )}
                                </div>
                            );
                        })}
                    </nav>
                </article>
            </div>
        </section>
    );
};

export default ScriptAndScholars;
