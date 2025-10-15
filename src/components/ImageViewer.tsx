import React from 'react';

interface ImageViewerProps {
    imagePreview: string | null;
    file: File | null;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ imagePreview, file }) => {
    return (
        <div className="w-full flex-grow bg-slate-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center min-h-[200px] border border-slate-200 dark:border-gray-700">
            {imagePreview ? (
                <img src={imagePreview} alt="Document preview" className="max-w-full max-h-80 object-contain rounded-md shadow-sm" />
            ) : file && file.type === 'application/pdf' ? (
                <div className="text-center text-slate-500 dark:text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <p className="mt-2 font-semibold">{file.name}</p>
                    <p className="text-sm text-slate-400 dark:text-slate-500">PDF document loaded</p>
                </div>
            ) : (
                <div className="text-center text-slate-500 dark:text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="mt-2">Your document preview will appear here.</p>
                </div>
            )}
        </div>
    );
};

export default ImageViewer;