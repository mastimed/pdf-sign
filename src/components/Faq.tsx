import React from 'react';

const faqData = [
    {
        question: 'What file types can I upload?',
        answer: 'You can upload common image formats like PNG, JPG, and WEBP, as well as PDF documents. Our AI will process the file to extract text.'
    },
    {
        question: 'Is my data secure?',
        answer: 'Yes, we prioritize your privacy. Documents are processed securely and are not stored on our servers after you leave the session. All connections are encrypted.'
    },
    {
        question: 'Can I edit the extracted text?',
        answer: 'Absolutely! After the text is extracted, it appears in an editor where you can make any necessary corrections or additions before signing and exporting.'
    },
    {
        question: 'How accurate is the text extraction (OCR)?',
        answer: 'Our tool uses a powerful AI model for high accuracy. However, the quality of the original document image can affect results. For best results, use clear, well-lit images.'
    }
];

const Faq: React.FC = () => {
    return (
        <section id="faq" className="py-16 sm:py-24 bg-slate-50 dark:bg-gray-900/50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                        Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqData.map((item, index) => (
                        <details key={index} className="group bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm cursor-pointer" name="faq">
                            <summary className="flex items-center justify-between font-semibold text-slate-800 dark:text-slate-100 list-none">
                                {item.question}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="mt-3 text-slate-600 dark:text-slate-400">
                                {item.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
