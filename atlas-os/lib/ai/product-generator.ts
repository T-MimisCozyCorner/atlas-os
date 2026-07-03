import OpenAI from "openai";
import { fallbackProductPlan } from "./fallback";
import { getProductFactoryPrompt, type ProductGenerationInput } from "./prompts";

export async function generateProduct(input: ProductGenerationInput) {
  if (!process.env.OPENAI_API_KEY) {
    return {
      source: "fallback",
      data: fallbackProductPlan(input.idea),
    };
  }

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const prompt = getProductFactoryPrompt(input);

  try {
    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5.5-mini",
      input: prompt,
    });

    const text = response.output_text;
    const parsed = JSON.parse(text);

    return {
      source: "openai",
      data: parsed,
    };
  } catch (error) {
    console.error("AI generation failed:", error);
    return {
      source: "fallback",
      data: fallbackProductPlan(input.idea),
    };
  }
}
