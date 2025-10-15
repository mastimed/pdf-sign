import React from 'react';

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
                className="h-10"
            />
        </a>
    );
};

const Footer: React.FC = () => {
    const sections = {
        "Product": [
            { name: "How To", href: "#how-to" },
            { name: "Testimonials", href: "#testimonials" },
            { name: "FAQ", href: "#faq" },
        ],
        "Legal": [
            { name: "Terms of Service", href: "#" },
            { name: "Privacy Policy", href: "#" },
            { name: "Cookies", href: "#" },
        ],
        "Contact": [
            { name: "Contact Us", href: "#" },
        ]
    };

    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="container mx-auto px-4 md:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="col-span-2 lg:col-span-2">
                        <a href="#" className="flex items-center space-x-2" aria-label="Back to homepage">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h2a2 2 0 002-2V4a2 2 0 00-2-2H9z" />
                                <path fillRule="evenodd" d="M4 8a2 2 0 012-2h5v6H6a2 2 0 01-2-2V8zm12 0a2 2 0 00-2-2h-5v6h5a2 2 0 002-2V8z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xl font-bold text-slate-800">
                                PDF Scanner Extra
                            </span>
                        </a>
                        <p className="mt-4 text-sm text-slate-600 max-w-xs">
                            An AI-powered document tool to scan, edit, and sign your documents with ease.
                        </p>
                        <div className="mt-6">
                             <h4 className="font-semibold text-sm text-slate-800">Get the App</h4>
                             <div className="mt-3 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-3">
                                <StoreButton platform="apple" href="#" />
                                <StoreButton platform="google" href="#" />
                             </div>
                        </div>
                    </div>

                    {Object.entries(sections).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="font-semibold text-slate-800">{title}</h3>
                            <ul className="mt-4 space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-t border-slate-200 py-6">
                <div className="container mx-auto px-4 md:px-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} PDF Scanner Extra. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
