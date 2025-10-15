import React from 'react';

interface TextEditorProps {
    text: string;
    onTextChange: (text: string) => void;
    placeholder: string;
}

const TextEditor: React.FC<TextEditorProps> = ({ text, onTextChange, placeholder }) => {
    return (
        <div className="flex flex-col flex-grow">
            <label htmlFor="text-editor" className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Extracted Text</label>
            <textarea
                id="text-editor"
                value={text}
                onChange={(e) => onTextChange(e.target.value)}
                placeholder={placeholder}
                className="w-full flex-grow p-4 border border-slate-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200 text-sm leading-relaxed bg-white dark:bg-gray-800 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500"
            />
        </div>
    );
};

export default TextEditor;