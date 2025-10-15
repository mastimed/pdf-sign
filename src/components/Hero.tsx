import React from 'react';
import FileUpload from './FileUpload';

interface HeroProps {
    onFileSelect: (file: File) => void;
}

const StoreButton: React.FC<{
    platform: 'apple' | 'google';
    href: string;
}> = ({ platform, href }) => {
    const isApple = platform === 'apple';
    const appleLogoUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg';
    const googleLogoUrl = 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg';

    const imageUrl = isApple ? appleLogoUrl : googleLogoUrl;
    const altText = isApple ? 'Download on the App Store' : 'Get it on Google Play';

    return (
        <a
            href={href}
            aria-label={altText}
            className="inline-block transition-transform transform hover:scale-105"
        >
            <img 
                src={imageUrl} 
                alt={altText} 
                className={`h-12 ${isApple ? 'dark:invert' : ''}`}
            />
        </a>
    );
};


const Hero: React.FC<HeroProps> = ({ onFileSelect }) => {
    return (
        <section className="relative py-16 sm:py-24 text-center bg-white dark:bg-gray-900 overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/40 [mask-image:linear-gradient(to_bottom,white_0%,transparent_100%)]"></div>
            <div className="container mx-auto px-4 md:px-8 relative">
                <span className="text-sm font-semibold text-blue-600 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                    AI Edition
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mt-4">
                    Scan, Edit, and Sign Documents
                </h1>
                <p className="max-w-3xl mx-auto mt-6 text-lg text-slate-600 dark:text-slate-300">
                    Effortlessly extract text from any document image or PDF, make edits on the fly, add your electronic signature, and export your finalized document in seconds.
                </p>
                <div className="mt-8 flex justify-center items-center gap-4">
                    <StoreButton platform="apple" href="#" />
                    <StoreButton platform="google" href="#" />
                </div>
                <div className="mt-10">
                    <FileUpload onFileSelect={onFileSelect} />
                </div>
            </div>
        </section>
    );
};

export default Hero;