
import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
            <p className="mt-4 text-white text-lg font-semibold">Processing...</p>
        </div>
    );
};

export default Loader;
