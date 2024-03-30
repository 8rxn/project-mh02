import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

import { configDotenv } from "dotenv";
configDotenv();

const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.GEMINI_API_KEY;

async function getPrices(question) {
  const res = await fetch("https://api.wazirx.com/api/v2/tickers");
  const data = await res.json();

  const filteredKeys = Object.keys(data).filter((key) => key.includes("inr"));

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.7,
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
    `Extract the correct key from the following keys for this question : \n\n ${question}\n\n from these keys: \n\n ${filteredKeys}\n\n Only output the key, and it's fullform without inr as a json of type: {short:string, long:string}.`
  );

  const response = result.response;
  const responseText = response.text().replaceAll("```json","").replaceAll("```","").replaceAll(" ","");
  const json = JSON.parse(responseText);
  const responseTextShort = json.short;
//   console.log(json);


  const msgObj = data[responseTextShort];
  const replyText = `Here's the latest update on ${json.long} (${msgObj.base_unit}) trading with the Indian Rupee (INR): The current price of ${msgObj.base_unit} stands at ₹${msgObj.last}. This value marks a slight change from the opening price of ₹${msgObj.open}. Today, Ethereum experienced a high of ₹${msgObj.high} and a low of ₹${msgObj.low}. In the trading session, the volume of ETH traded was ${msgObj.volume} ${msgObj.base_unit}. If you're looking to sell ${json.long}, the current asking price is ₹${msgObj.sell}, while buying orders are being placed at around ₹${msgObj.buy}. This data gives you an insight into the market's recent trends and helps inform your trading decisions.`;

  return replyText;
}

export default getPrices;
// getPrices("Ethereum ki INR mein kya value hai?").then(console.log);
