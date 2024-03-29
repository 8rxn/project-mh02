import express from 'express';
import bodyParser from 'body-parser';
import getWeather from './weather-api.mjs';

const app = express();
app.use(bodyParser.json());

app.post('/bot-message', async (req, res) => {
    const { botHandle, message } = req.body;
    console.log(`Received message from ${botHandle}: ${message}`);

    if(botHandle === "@weather-bot") {
        const question = message;
        const reply = await getWeather(question);
        res.json({ replyText: reply, bot: "@weather-bot"});
    }

    res.json({
        replyText: "Hello!",
        bot: "sdfg",
        image: "https://img" // Replace with a valid image URL
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
