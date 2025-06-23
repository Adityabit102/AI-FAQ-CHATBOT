import React, { useState } from "react";
import axios from "axios";

function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { from: "user", text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");

        try {
            const res = await axios.post("http://localhost:5050/api/ask", {
                question: input
            });

            const botMessage = { from: "bot", text: res.data.answer };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            const errorMessage = { from: "bot", text: "Sorry, an error occurred." };
            setMessages(prev => [...prev, errorMessage]);
            console.error(error);
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>AI FAQ Chatbot</h2>
            <div style={{
                height: 300,
                overflowY: "auto",
                border: "1px solid #ccc",
                padding: 10,
                marginBottom: 10
            }}>
                {messages.map((msg, i) => (
                    <div key={i} style={{ textAlign: msg.from === "user" ? "right" : "left" }}>
                        <p><strong>{msg.from}:</strong> {msg.text}</p>
                    </div>
                ))}
            </div>
            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask a question..."
                style={{ width: "80%", padding: 8 }}
            />
            <button onClick={sendMessage} style={{ padding: 8, marginLeft: 10 }}>Send</button>
        </div>
    );
}

export default ChatBot;