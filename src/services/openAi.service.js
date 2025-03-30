import OpenAI from "openai";
import { config } from "../configs/config.js";

// Create OpenAI client instance
const openai = new OpenAI({
  apiKey: config.openai.apiKey,
});

// Function to generate tweet from caption
export async function generateTweet(caption) {
  try {
    const response = await openai.completions.create({
      model: "text-davinci-003",
      prompt: `Create an engaging Twitter post based on this caption: "${caption}". Make it concise and catchy.`,
      max_tokens: 280,
      temperature: 0.7,
    });

    const generatedTweet = response.choices[0].text?.trim() || "";
    return generatedTweet;
  } catch (error) {
    console.error("OpenAI generation error:", error);
    throw new Error("Failed to generate tweet");
  }
}

export default { generateTweet };
