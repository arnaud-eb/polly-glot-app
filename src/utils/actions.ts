"use server";

import { openai } from "./openai";

export async function translate(prevState: any, formData: FormData) {
  // TODO: use zod to validate the input
  const translationInput = formData.get("translation-input");
  const selectedLanguage = formData.get("language");
  const prompt = `
  Text to translate: ${translationInput}
  Language: ${selectedLanguage}
  `;
  console.log("translationInput", translationInput);
  console.log("selectedLanguage", selectedLanguage);

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: [
            {
              type: "text",
              text: "You are an expert polyglot translator. You will receive a piece of text and the target language to translate it into. Translate the provided text accurately into the requested language, without any additional comments.",
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: prompt,
            },
          ],
        },
      ],
    });

    return {
      original: translationInput,
      translation: response.choices[0].message.content,
    };
  } catch (error) {
    console.error(error);
  }
}
