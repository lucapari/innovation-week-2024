import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

const locales = [
  "ca_ES",
  "de_DE",
  "en_US",
  "es_ES",
  "fr_FR",
  "it_IT",
  "nl_NL",
  "pt_PT",
  "sv_SE",
];

export const generateChefDescription = async (
  chefFullName,
  cuisineStyles,
  cookingTechniques,
  mostPopularDish,
  background = "",
  vision = "",
  tone,
  language
) => {
  const systemContent = `You will be given a list of answers provided by a chef through a questionnaire. Your task is to summarize the information in a first person presentation of the chef, as if he or she were presenting themselves on a cooking magazine. Minimum 400 characters. Maximum 500 characters. Use ${tone} tone. Do not use greetings (like "Hello", "Hey there", "Welcome", etc.). Write in ${language}. Remove non-cuisine related info.`;
  const chefContent = `Chef name: ${chefFullName} \n Cuisine style: ${cuisineStyles.join(
    ", "
  )} \n Cooking techniques: ${cookingTechniques.join(
    ", "
  )} \n Most popular dish: ${mostPopularDish} \n Background: ${background} \n Vision: ${vision} \n`;
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: systemContent,
      },
      {
        role: "user",
        content: chefContent,
      },
    ],
    model: "gpt-3.5-turbo",
  });
  const estimatedCost =
    completion.usage.prompt_tokens * 0.5 +
    completion.usage.completion_tokens * 1.5;
  console.log(
    `* Generate chef description * \nEstimated cost: $${estimatedCost}/1M`
  );
  return completion.choices[0];
};

export const translateBiography = async (biography) => {
  const translations = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You will be provided with a sentence, and your task is to translate it into all the following locales: ${locales}. You are a helpful assistant designed to output JSON. The JSON you output must have the following format: { "locale": "translation",  "locale2": "translation2", ... }. If the input string is already in one of the locales requested, keep the input string unchanged for that locale. Do not translate names (e.g., restaurant names).`,
      },
      {
        role: "user",
        content: biography,
      },
    ],
    response_format: { type: "json_object" },
    model: "gpt-3.5-turbo",
  });
  const estimatedCost =
    translations.usage.prompt_tokens * 0.5 +
    translations.usage.completion_tokens * 1.5;
  console.log(`* Translate biography * \nEstimated cost: $${estimatedCost}/1M`);
  return JSON.parse(translations.choices[0].message.content);
};
