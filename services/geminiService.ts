
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateStudyHelp = async (
  query: string,
  context: string,
  history: { role: string; text: string }[] = []
): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure your Gemini API key.";
  }

  try {
    const systemInstruction = `You are an elite Banking Exam Tutor for IBPS/SBI PO aspirants.
    
    Your goal is to explain complex financial concepts in a simple, engaging, and memorable way.
    
    Current Study Context:
    "${context.substring(0, 3000)}..."

    Guidelines:
    1. Use analogies to explain tough concepts (e.g., compare Repo Rate to a car loan rate).
    2. If the user asks for facts, stick to the provided context or general banking truths.
    3. Keep answers concise, bulleted, and exam-oriented.
    4. Highlight keywords that are likely to appear in exams.
    5. Be encouraging and supportive.

    Answer the user's question based on the above context and your expert knowledge.`;

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessage({ message: query });
    return result.text || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request. Please try again later.";
  }
};
