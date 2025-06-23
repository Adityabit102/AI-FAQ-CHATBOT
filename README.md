# 🤖 AI-Powered FAQ Chatbot

A full-stack chatbot that answers FAQs using an AI model from the [OpenRouter](https://openrouter.ai) API. Built with **React** and **Node.js**, it integrates a lightweight AI layer to handle real-time user queries.

---

## 🌐 Live Features

- AI-powered question answering
- Chat-style UI
- Uses OpenRouter's free-tier API
- Real-time responses
- Feedback-ready logic (future scope)

---

## 🛠️ Tech Stack

**Frontend:**
- React
- Axios
- Material UI (if enhancements added)

**Backend:**
- Node.js
- Express
- dotenv
- OpenRouter API

---

## 📁 Folder Structure

ai-faq-chatbot/
├── backend/ # Node.js server with API logic
│ ├── routes/ # API endpoints
│ ├── utils/ # OpenRouter integration
│ └── server.js # Server setup
├── frontend/ # React-based UI
│ ├── src/
│ │ └── components/ChatBot.js
│ └── public/index.html
├── .env.example # Env variables sample
├── .gitignore
└── README.md


---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/ai-faq-chatbot.git
cd ai-faq-chatbot
2. Setup the Backend
cd backend
cp .env.example .env     # Add your OpenRouter API key here
npm install
node server.js           # Server runs on http://localhost:5050
3. Setup the Frontend
cd ../frontend
npm install
npm start                # Opens on http://localhost:3000
🔐 Environment Variables

In your .env file:

OPENROUTER_API_KEY=your-openrouter-api-key
MODEL=openai/gpt-3.5-turbo


🧠 Future Improvements

Light/dark theme toggle
Typing animation
Message feedback buttons
Persistent chat history
Export to PDF/Markdown
🧑‍💻 Author

Developed by me for internship and educational purposes.... free to use.
