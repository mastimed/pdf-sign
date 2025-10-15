import React from 'react';

const AdPlaceholder: React.FC = () => {
    return (
        <div className="container mx-auto px-4 md:px-8 my-8">
            <div className="flex items-center justify-center h-24 sm:h-32 bg-gray-100 rounded-lg border border-dashed border-gray-300">
                <p className="text-sm text-gray-400 font-medium">Advertisement</p>
            </div>
        </div>
    );
};

export default AdPlaceholder;
