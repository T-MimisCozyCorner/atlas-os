import OpenAI from "openai";
import { fallbackProductPlan } from "./fallback";
import { getProductFactoryPrompt, type ProductGenerationInput } from "./prompts";

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  try {
    return JSON.stringify(error);
  } catch {
    return String(error);
  }
}

export async function generateProduct(input: ProductGenerationInput) {
  if (!process.env.OPENAI_API_KEY) {
    return {
      source: "fallback",
      error: "Missing OPENAI_API_KEY in Vercel environment variables.",
      data: fallbackProductPlan(input.idea),
    };
  }

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const prompt = getProductFactoryPrompt(input);
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

  try {
    const response = await client.responses.create({
      model,
      input: prompt,
    });

    const text = response.output_text;

    if (!text) {
      return {
        source: "fallback",
        error: "OpenAI returned an empty response.",
        data: fallbackProductPlan(input.idea),
      };
    }

    try {
      const parsed = JSON.parse(text);
      return {
        source: "openai",
        error: "",
        data: parsed,
      };
    } catch {
      return {
        source: "fallback",
        error: `OpenAI response was not valid JSON. Raw response starts with: ${text.slice(0, 300)}`,
        data: fallbackProductPlan(input.idea),
      };
    }
  } catch (error) {
    console.error("OpenAI generation failed:", error);
    return {
      source: "fallback",
      error: getErrorMessage(error),
      data: fallbackProductPlan(input.idea),
    };
  }
}
