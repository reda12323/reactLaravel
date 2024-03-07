import React, { useState, useEffect } from 'react';
import './Scroll.css';

const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show button when user scrolls down 200px
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            // Remove the event listener when the component is unmounted
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        // Scroll to the top smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={`scroll-to-top-btn ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            <i class="fa-solid fa-arrow-up"></i>
        </button>
    );
};

export default Scroll;