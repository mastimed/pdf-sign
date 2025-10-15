import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
    theme: string;
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { name: 'How To', href: '#how-to' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <header className={`sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 border-b border-slate-200 dark:border-gray-800' : ''}`}>
            <div className="container mx-auto px-4 md:px-8">
                <div className="relative flex items-center h-16">
                    <a href="#" className="flex items-center space-x-2 mr-6" aria-label="Back to homepage">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h2a2 2 0 002-2V4a2 2 0 00-2-2H9z" />
                            <path fillRule="evenodd" d="M4 8a2 2 0 012-2h5v6H6a2 2 0 01-2-2V8zm12 0a2 2 0 00-2-2h-5v6h5a2 2 0 002-2V8z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xl font-bold text-slate-800 dark:text-white">
                            PDF Scanner Extra
                        </span>
                    </a>
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <div className="flex-grow"></div>
                    <div className="flex items-center">
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                        <button className="ml-4 hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;