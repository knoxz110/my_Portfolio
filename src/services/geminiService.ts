
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Always use process.env.API_KEY directly for initialization as per guidelines
export const askCareerAssistant = async (userPrompt: string, history: ChatMessage[]) => {
  // Creating a new GoogleGenAI instance inside the function to ensure the current environment key is used
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are an AI Career Assistant for a professional Junior Cloud Engineer.
    Candidate Background:
    - 3+ years as a Software Developer (Expert in HTML5/CSS3, Proficient in React/TS/MongoDB).
    - 1 year as a Cloud Engineer (Proficient in AWS EC2, Linux, Docker, CI/CD, Bash).
    - Learning: Python, Kubernetes, Networking, Terraform.
    - Transitioning from Dev to Cloud (DevOps focus).

    Tone: Professional, encouraging, and informative.
    Goal: Answer questions from potential employers or visitors about why they should hire this candidate or how their dev background helps in Cloud/DevOps.
    Be concise. Do not make up facts not provided in the background.
  `;

  try {
    // Constructing a single prompt that includes conversation history for context
    const historyText = history
      .map(msg => `${msg.role === 'user' ? 'Visitor' : 'Assistant'}: ${msg.content}`)
      .join('\n');
    
    const fullPrompt = historyText 
      ? `${historyText}\nVisitor: ${userPrompt}\nAssistant:`
      : `Visitor: ${userPrompt}\nAssistant:`;

    // Using ai.models.generateContent for text-based answers as recommended
    // 'gemini-3-flash-preview' is used for basic Q&A tasks
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: fullPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    // Accessing .text as a property, not a method, as per SDK requirements
    return response.text || "I'm sorry, I'm having trouble connecting to my AI core right now. Please try again in a moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my AI core right now. Please try again in a moment.";
  }
};
