import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const res = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });
    const data = await res.json();
    setMessages([...messages, { user: input, bot: data.reply }]);
    setInput('');
  };

  return (
    <div className="App">
      <h1>AI FAQ Chatbot</h1>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index}>
            <p><strong>You:</strong> {msg.user}</p>
            <p><strong>Bot:</strong> {msg.bot}</p>
          </div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask a question..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;