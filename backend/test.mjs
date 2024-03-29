import axios from 'axios';

async function testPostRequest() {
    try {
        const response = await axios.post('http://localhost:3000/bot-message', {
            botHandle: "@weather-bot",
            message: "Delhi mein mausam kaisa hai?"
        });

        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.response?.data || error.message);
    }
}

testPostRequest();


// import getWeather from "./weather-api.mjs";

// const question = "Punemadhye havamaan kasam aahe?";
// getWeather(question).then(console.log);