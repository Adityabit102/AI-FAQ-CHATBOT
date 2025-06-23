const axios = require("axios");

async function askOpenRouter(question) {
    try {
        const apiKey = process.env.OPENROUTER_API_KEY;

        if (!apiKey) {
            console.error("❌ OPENROUTER_API_KEY is missing from .env");
            throw new Error("Missing API key");
        }

        console.log("🔑 Using OpenRouter API key:", apiKey.slice(0, 12) + "...");

        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "mistralai/mistral-7b-instruct", // ✅ Correct model ID
                messages: [
                    { role: "system", content: "You are a helpful AI FAQ assistant." },
                    { role: "user", content: question }
                ]
            },
            {
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json"
                }
            }
        );

        const answer = response.data.choices[0].message.content;
        return answer;
    } catch (error) {
        if (error.response) {
            console.error("❌ OpenRouter API error:", error.response.status, error.response.data);
        } else {
            console.error("❌ Unknown error:", error.message);
        }

        // Still throw so frontend gets "Failed to get answer"
        throw new Error("Failed to get answer from OpenRouter");
    }
}

module.exports = { askOpenRouter };
