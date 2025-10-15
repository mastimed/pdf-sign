
import React from 'react';

interface ActionButtonsProps {
    onOcr: () => void;
    onGeneratePdf: () => void;
    isOcrDisabled: boolean;
    isPdfDisabled: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onOcr, onGeneratePdf, isOcrDisabled, isPdfDisabled }) => {
    const baseButtonClasses = "w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-opacity duration-300";
    const primaryButtonClasses = "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500";
    const secondaryButtonClasses = "text-white bg-green-600 hover:bg-green-700 focus:ring-green-500";
    const disabledClasses = "opacity-50 cursor-not-allowed";

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
                onClick={onOcr}
                disabled={isOcrDisabled}
                className={`${baseButtonClasses} ${primaryButtonClasses} ${isOcrDisabled ? disabledClasses : ''}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm3.5 4a.5.5 0 000 1h5a.5.5 0 000-1h-5zM8 9a.5.5 0 000 1h4a.5.5 0 000-1H8zm-1.5 3a.5.5 0 000 1h7a.5.5 0 000-1h-7z" clipRule="evenodd" />
                </svg>
                Scan & Extract Text
            </button>
            <button
                onClick={onGeneratePdf}
                disabled={isPdfDisabled}
                className={`${baseButtonClasses} ${secondaryButtonClasses} ${isPdfDisabled ? disabledClasses : ''}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                </svg>
                Generate PDF
            </button>
        </div>
    );
};

export default ActionButtons;
