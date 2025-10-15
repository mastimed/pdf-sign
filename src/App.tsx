import React, { useState, useCallback } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

import Header from './components/Header';
import Hero from './components/Hero';
import Workspace from './components/Workspace';
import HowTo from './components/HowTo';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Loader from './components/Loader';
import AdPlaceholder from './components/AdPlaceholder';
import { extractTextFromImage } from './services/geminiService';

const App: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [extractedText, setExtractedText] = useState<string>('');
    const [signatureDataUrl, setSignatureDataUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (selectedFile: File) => {
        setFile(selectedFile);
        setImagePreview(null);
        setExtractedText('');
        setSignatureDataUrl(null);
        setError(null);

        if (selectedFile.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleOcr = useCallback(async () => {
        if (!file) {
            setError('Please upload a file first.');
            return;
        }
        setIsLoading(true);
        setError(null);

        const fileToBase64 = (fileToConvert: File): Promise<string> =>
            new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(fileToConvert);
                reader.onload = () => resolve((reader.result as string).split(',')[1]);
                reader.onerror = (error) => reject(error);
            });

        try {
            const base64Data = await fileToBase64(file);
            const result = await extractTextFromImage(base64Data, file.type);
            setExtractedText(result);
        } catch (err) {
            console.error(err);
            setError('Failed to extract text. Please ensure your API key is configured correctly and try again.');
        } finally {
            setIsLoading(false);
        }
    }, [file]);

    const handlePdfGeneration = async () => {
        const pdfContentElement = document.getElementById('pdf-content');
        if (!pdfContentElement) {
            setError('Could not find content to generate PDF.');
            return;
        }
        
        setIsLoading(true);
        setError(null);

        try {
            const canvas = await html2canvas(pdfContentElement, { scale: 2, backgroundColor: '#ffffff' });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [canvas.width, canvas.height]
            });
            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save('signed-document.pdf');
        } catch (err) {
            console.error(err);
            setError('Failed to generate PDF.');
        } finally {
            setIsLoading(false);
        }
    };
    
    const dismissError = () => setError(null);

    return (
        <div className="antialiased font-sans text-slate-800">
            {isLoading && <Loader />}
            <Header />
            <main>
                <Hero onFileSelect={handleFileChange} />
                
                {error && (
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-md shadow-md flex justify-between items-center" role="alert">
                            <div>
                                <p className="font-bold">Error</p>
                                <p>{error}</p>
                            </div>
                            <button onClick={dismissError} className="p-1 rounded-full hover:bg-red-200" aria-label="Dismiss error">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </button>
                        </div>
                    </div>
                )}

                {file && (
                    <Workspace
                        file={file}
                        imagePreview={imagePreview}
                        extractedText={extractedText}
                        setExtractedText={setExtractedText}
                        signatureDataUrl={signatureDataUrl}
                        setSignatureDataUrl={setSignatureDataUrl}
                        onOcr={handleOcr}
                        onGeneratePdf={handlePdfGeneration}
                        isLoading={isLoading}
                    />
                )}
                <AdPlaceholder />
                <HowTo />
                <Testimonials />
                <Faq />
                <AdPlaceholder />
            </main>
            <Footer />
            
            <div className="absolute -z-10 -left-[9999px] top-0">
                <div id="pdf-content" className="p-10 bg-white text-black" style={{width: '800px'}}>
                    <h1 className="text-2xl font-bold mb-6 border-b pb-2 text-slate-800">Scanned Document</h1>
                    <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-700">{extractedText}</pre>
                    {signatureDataUrl && (
                        <div className="mt-12 pt-8 border-t border-slate-200">
                            <h2 className="text-lg font-semibold mb-4 text-slate-700">Signature:</h2>
                            <img src={signatureDataUrl} alt="User signature" className="w-48 h-auto" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
