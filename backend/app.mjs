import express from "express";
import bodyParser from "body-parser";
import getWeather from "./weather-api.mjs";
import getPrices from "./coin-api.mjs";
import getKnowledge from "./knowledge-api.mjs";

const app = express();
app.use(bodyParser.json());


// Bot Commands and Response Handling...
app.post("/bot-message", async (req, res) => {
  const { botHandle, message } = req.body;
  console.log(`Received message for ${botHandle}: ${message}`);

  if (botHandle === "@weather-bot") {
    const question = message;
    const reply = await getWeather(question);
    // res.json({ text: reply, from: "@weather-bot" });
    res.send(`text-content: ${reply} bot-name: @weather-bot`);
  } else if (botHandle === "@crypto-bot") {
    const question = message;
    const returnObject = await getPrices(question);
    const reply = returnObject.replyText;
    const image = returnObject.image;
    // res.json({ text: reply, from: "@crypto-bot", image: image });
    res.send(`image-id: ${image} text-content: ${reply} bot-name: @crypto-bot`);
  } else if (botHandle === "@knowledge-bot") {
    const question = message;
    const response = await getKnowledge(botHandle, question);
    // res.json({ text: response, from: "@knowledge-bot" });
    res.send(`text-content: ${response} bot-name: @knowledge-bot`);
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
