import fs from "fs/promises"; // Import the promises version of fs
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

import { configDotenv } from "dotenv";
configDotenv();

// Get the parts from JSON
async function getParts(botHandle, question) {
  var completeParts = [];
  try {
    const jsonString = await fs.readFile("bot.json", "utf8");
    const jsonData = JSON.parse(jsonString);
    const arrayData = jsonData.questionAnswers;

    for (let i = 0; i < arrayData.length; i++) {
      completeParts.push({
        text: `input: ${arrayData[i].question}`,
      });
      completeParts.push({
        text: `output: ${arrayData[i].answer}`,
      });
    }
    completeParts.push({
      text: `input: ${question}`,
    });

    return completeParts;
  } catch (err) {
    console.error("Error:", err);
  }
}

const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.GEMINI_API_KEY;

// Making Gemini Call
async function getAIResponse(parts) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    generationConfig,
    safetySettings,
  });

  const response = result.response;
  return response.text();
}

async function getKnowledge(bot, question) {
  const parts = await getParts(bot, question);
  const aiResponse = await getAIResponse(parts);
  const trimmed = aiResponse.split('output:');
  console.log(trimmed[0]);
  return trimmed[0];
}

export default getKnowledge;


