// This file is reserved for non-chat Gemini logic, e.g., generating dynamic descriptions for SEO based on city.
// Currently, the chat logic is self-contained in AIChatAssistant for simplicity of state management.
import { GoogleGenAI } from "@google/genai";

export const generateCityDescription = async (city: string): Promise<string> => {
  try {
     const apiKey = process.env.API_KEY;
      if (!apiKey) return `Services de débouchage experts à ${city}.`;

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Génère une phrase d'accroche courte (max 20 mots) pour un service de plomberie d'urgence à ${city}, Belgique. Mets l'accent sur la rapidité.`,
      });
      return response.text || `Services de débouchage experts à ${city}.`;
  } catch (e) {
    return `Services de débouchage experts à ${city}.`;
  }
}
