
import { GoogleGenAI } from "@google/genai";

const extractTextFromImage = async (base64ImageData: string, mimeType: string): Promise<string> => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
    throw new Error("VITE_GEMINI_API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: apiKey });

    const imagePart = {
        inlineData: {
            data: base64ImageData,
            mimeType: mimeType,
        },
    };

    const textPart = {
        text: "Extract all text from this document. Preserve the original formatting, including line breaks and spacing, as accurately as possible. Output only the extracted text.",
    };

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: { parts: [imagePart, textPart] },
        });

        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to communicate with the AI model.");
    }
};

export { extractTextFromImage };
