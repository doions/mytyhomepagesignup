import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages([...messages, { text: input, sender: "user" }]);

    // Mock bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I'm here to help!", sender: "bot" },
      ]);
    }, 1000);

    // Clear input
    setInput("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 shadow-lg border border-gray-200 rounded-2xl bg-white">
      <div className="p-4 h-96 overflow-y-auto flex flex-col space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg text-white ${
                msg.sender === "user"
                  ? "bg-blue-500"
                  : "bg-gray-500"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 resize-none border rounded-lg p-3 bg-gray-100 dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 text-3xl"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
