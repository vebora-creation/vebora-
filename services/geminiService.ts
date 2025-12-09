import { GoogleGenAI } from "@google/genai";
import { SERVICES, PACKAGES, COMPANY_PHONE } from "../constants";

// Initialize Gemini Client
// In a real app, ensure process.env.API_KEY is set.
// For this generated code, we assume the environment is set up correctly.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const systemInstruction = `
You are 'Vera', the AI assistant for Vebora, a premium digital agency.
Your goal is to help potential clients understand Vebora's services and encourage them to book a consultation via WhatsApp (${COMPANY_PHONE}).

Key Information about Vebora:
- Services: ${SERVICES.map(s => s.title).join(', ')}.
- Pricing: Basic ($299), Standard ($599), Custom.
- Location: Operating globally, serving all industries.
- Tone: Professional, helpful, concise, and trustworthy.

Rules:
1. Keep answers short (under 3 sentences usually).
2. Always be polite.
3. If asked about pricing, mention the packages.
4. If the user seems interested, suggest contacting us on WhatsApp at ${COMPANY_PHONE}.
5. Do not make up services we don't offer.
`;

export const chatWithVera = async (message: string, history: { role: string; parts: { text: string }[] }[] = []) => {
  if (!apiKey) {
    return "I'm currently offline (API Key missing). Please contact us directly via WhatsApp!";
  }

  try {
    const model = "gemini-2.5-flash";
    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction,
      },
      history: history // Pass previous context if needed
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now. Please try again or WhatsApp us directly.";
  }
};