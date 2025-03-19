import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";


const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [isOpen, setIsOpen] = useState(false); // Controls chatbot visibility
    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (isOpen) scrollToBottom();
    }, [messages, isOpen]);

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    const appendMessage = (sender, message, id = null) => {
        setMessages((prevMessages) => [...prevMessages, { sender, message, id }]);
    };

    const sendMessage = () => {
        if (!inputText && !selectedFile) return;
        appendMessage("user", inputText || "File Sent");
        setInputText("");

        const formData = new FormData();
        formData.append("msg", inputText);
        if (selectedFile) formData.append("file", selectedFile);

        fetchBotResponse(formData);
    };

    const fetchBotResponse = (formData) => {
        fetch("http://localhost:3000/get", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.text()) 
            .then((data) => appendMessage("model", data))
            .catch(() => appendMessage("model error", "Failed to fetch response."))
            .finally(() => setSelectedFile(null));
    };

    return (
        <div>
            {/* Chatbot Toggle Button */}
            <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
                <i className="fas fa-comment-alt"></i>
            </button>

            {/* Chatbot Interface */}
            {isOpen && (
                <div className="chatbot-container">
                    <div className="chatbot-header">
                        <h5>Chatbot</h5>
                        <button onClick={() => setIsOpen(false)} className="close-btn">
                            &times;
                        </button>
                    </div>

                    <div className="chat-container" ref={chatContainerRef}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                <div className="msg-header">{msg.sender}</div>
                                <div className="msg-body">{msg.message}</div>
                            </div>
                        ))}
                    </div>

                    <div className="chatbot-footer">
                        <input
                            type="text"
                            placeholder="Ask me anything..."
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button onClick={sendMessage}>
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
