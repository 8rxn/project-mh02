import express from "express";
import { spawn } from "child_process";
import bodyParser from "body-parser";
import getWeather from "./weather-api.mjs";
import getPrices from "./coin-api.mjs";

const app = express();
app.use(bodyParser.json());


// Bot Commands and Response Handling...
app.post("/bot-message", async (req, res) => {
  const { botHandle, message } = req.body;
  console.log(`Received message for ${botHandle}: ${message}`);

  if (botHandle === "@weather-bot") {
    const question = message;
    const reply = await getWeather(question);
    res.json({ replyText: reply, bot: "@weather-bot" });
  } else if (botHandle === "@crypto-bot") {
    const question = message;
    const reply = await getPrices(question);
    res.json({ replyText: reply, bot: "@crypto-bot" });
  } 
  
  else {
    res.json({
      replyText: "Hello!",
      bot: "sdfg",
      image: "https://img", // Replace with a valid image URL
    });
  }
});



// Spinning Up Process and loading handlers.
app.get("/status", (req, res) => {
  res.json({ status: "up" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
