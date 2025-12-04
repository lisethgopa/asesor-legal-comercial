import { GoogleGenAI } from "@google/genai";
import { LEGAL_CONTEXT } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateLegalResponse = async (userPrompt: string): Promise<string> => {
  try {
    const modelId = 'gemini-2.5-flash'; 
    
    const response = await ai.models.generateContent({
      model: modelId,
      contents: userPrompt,
      config: {
        systemInstruction: `Actúa como un abogado experto en Derecho Comercial Colombiano. 
        Utiliza el siguiente contexto para responder a las preguntas del usuario. 
        Si la respuesta no se encuentra en el contexto, usa tu conocimiento general sobre la ley colombiana pero prioriza la información provista.
        Sé profesional, claro y estructura tus respuestas para fácil lectura.
        
        CONTEXTO:
        ${LEGAL_CONTEXT}`,
        temperature: 0.3, // Low temperature for more factual, consistent responses
      },
    });

    return response.text || "Lo siento, no pude generar una respuesta en este momento.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Hubo un error al consultar al asesor legal. Por favor intenta nuevamente.";
  }
};