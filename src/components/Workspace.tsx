import React from 'react';
import ImageViewer from './ImageViewer';
import TextEditor from './TextEditor';
import SignaturePad from './SignaturePad';
import ActionButtons from './ActionButtons';

interface WorkspaceProps {
    file: File | null;
    imagePreview: string | null;
    extractedText: string;
    setExtractedText: (text: string) => void;
    signatureDataUrl: string | null;
    setSignatureDataUrl: (dataUrl: string | null) => void;
    onOcr: () => void;
    onGeneratePdf: () => void;
    isLoading: boolean;
    theme: string;
}

const Workspace: React.FC<WorkspaceProps> = ({
    file,
    imagePreview,
    extractedText,
    setExtractedText,
    signatureDataUrl,
    setSignatureDataUrl,
    onOcr,
    onGeneratePdf,
    isLoading,
    theme
}) => {
  return (
    <section id="workspace" className="py-12 sm:py-16 bg-slate-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col space-y-6">
                    <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-gray-700 pb-3">1. Your Document</h2>
                    <ImageViewer imagePreview={imagePreview} file={file} />
                    <SignaturePad key={file?.name || 'no-file'} onSignatureChange={setSignatureDataUrl} theme={theme} />
                </div>

                {/* Right Column */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col space-y-6">
                    <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-gray-700 pb-3">2. Edit & Finalize</h2>
                    <ActionButtons
                        onOcr={onOcr}
                        onGeneratePdf={onGeneratePdf}
                        isOcrDisabled={!file || isLoading}
                        isPdfDisabled={!extractedText || !signatureDataUrl || isLoading}
                    />
                    <TextEditor
                        text={extractedText}
                        onTextChange={setExtractedText}
                        placeholder={isLoading ? 'Extracting text...' : 'Extracted text will appear here after scanning.'}
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Workspace;