import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

import { configDotenv } from "dotenv";
configDotenv();

const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.GEMINI_API_KEY;

async function runChat(question) {
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

  const chat = model.startChat({
    generationConfig,
    safetySettings,
  });

  const result = await chat.sendMessage(
    `Extract the city out of the following Question:.\n\nQuestion: ${question}\n\nOutput: {\ncity: "Indore"\n}\n\nOnly output the object, and nothing else.`
  );
  const response = result.response;
  return response.text();
}

async function getWeather(question) {
  const response = await runChat(question);
  const regex = /"([^"]*)"/;
  const match = regex.exec(response);

  if (match && match[1]) {
    const city = match[1];
    try {
      const response = await fetch("https://api.api-ninjas.com/v1/weather?city=" + city, {
        method: "GET",
        headers: {
          "X-Api-Key": process.env.NINJA_API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error("Error: " + response.status);
      }

      const jsonResponse = await response.json();
      const returnMessage = `Good day! Today's weather in ${city} brings a temperature of ${jsonResponse.temp}°C, though it may feel like ${jsonResponse.feels_like}°C due to humidity levels reaching ${jsonResponse.humidity}%. The skies will be partly cloudy with cloud coverage at about ${jsonResponse.cloud_pct}%, adding a pleasant backdrop to your day.`;
      
      return returnMessage;
    } catch (error) {
      console.error("Request failed:", error);
      return "Sorry, I could not fetch weather details for the provided city."
    }
  } else {
    console.log("No city found in response");
    return "Sorry, I could not extract the city from the question.";
  }
}


export default getWeather;
