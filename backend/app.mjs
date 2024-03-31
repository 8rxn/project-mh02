import express from "express";
import bodyParser from "body-parser";
import getWeather from "./weather-api.mjs";
import getPrices from "./coin-api.mjs";
import { spawn } from "child_process";
import getKnowledge from "./knowledge-api.mjs";

const app = express();
app.use(bodyParser.json());

async function runAOSCommands(process) {
  return new Promise((resolve, reject) => {
    console.log("Starting AOS process...");
    const aos = spawn("aos", [process, "--load", "chatroom.lua"], {
      stdio: ["pipe", "pipe", "pipe"],
    });

    let outputBuffer = "";
    let aoId = null;
    let loadCommandSent = false;

    aos.stdout.on("data", (data) => {
      const dataStr = data.toString();
      outputBuffer += dataStr;

      console.log("out: ", outputBuffer)
      if (!aoId && outputBuffer.includes("aos process: ")) {
        const match = outputBuffer.match(/aos process:\s*(\S+)/);
        if (match && match[1]) {
          aoId = match[1];
          console.log("AO ID:", aoId);
          outputBuffer = "";
        }
      }

      // Check for the 'aos>' prompt to send the .load command
      if (aoId && !loadCommandSent && outputBuffer.includes("aos>")) {
        console.log("Process completed, closing...");
        console.log("AO ID:", aoId);
        resolve(aoId);
        aos.kill(0);
        // return aoId;
      }
    });

    aos.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
      reject(data.toString());
    });

    aos.on("close", (code) => {
      console.log(`AOS process exited with code ${code}`);
      if (code !== 0) {
        reject(`AOS process exited with non-zero exit code: ${code}`);
      }
    });
  });
}

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
  } else {
    res.json({
      replyText: "Hello!",
      bot: "sdfg",
      image: "https://img", // Replace with a valid image URL
    });
  }
});

app.get("/chatroom", async (req, res) => {
  const id = await runAOSCommands("custom-chat");
  res.json({ id });
});

// Spinning Up Process and loading handlers.
app.get("/status", (req, res) => {
  res.json({ status: "up" });
});

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
