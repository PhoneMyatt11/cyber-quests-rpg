import React, { useEffect, useRef, useState } from "react";

export default function AIChatBox({ open, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);
  const backdropRef = useRef(null);

  // Prevent background scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, loading]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Click outside to close
  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (backdropRef.current && e.target === backdropRef.current) {
        onClose();
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);
    setMessages((msgs) => [...msgs, { role: "assistant", text: "AI is thinking…" }]);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text }),
      });
      const data = await res.json();
      setMessages((msgs) => [
        ...msgs.slice(0, -1),
        { role: "assistant", text: data.reply || "(No reply)" },
      ]);
    } catch {
      setMessages((msgs) => [
        ...msgs.slice(0, -1),
        { role: "assistant", text: "Sorry, there was an error." },
      ]);
    }
    setLoading(false);
  };

  if (!open) return null;
  return (
    <>
      <div
        className="chat-backdrop"
        ref={backdropRef}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(2px)",
          zIndex: 10000,
        }}
      />
      <div
        className="pixel-modal pixel-chatbox-modal"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10001,
          maxWidth: 600,
          width: "98vw",
          maxHeight: "75vh",
          minHeight: 400,
          background: "#232323",
          border: "4px solid #fff",
          borderRadius: 12,
          boxShadow: "0 0 0 4px #000, 4px 4px 0 #000",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <button
          className="pixel-close"
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            background: "#111",
            color: "#fff",
            border: "2px solid #fff",
            borderRadius: 6,
            width: 32,
            height: 32,
            fontSize: 18,
            cursor: "pointer",
            zIndex: 2,
          }}
          onClick={onClose}
        >
          ×
        </button>
        <div
          ref={chatRef}
          className="pixel-chat-scroll"
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "2.5rem 1rem 1rem 1rem",
            marginBottom: 0,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {messages.length === 0 && (
            <div className="pixel-chat-message pixel-chat-empty" style={{ color: "#aaa", textAlign: "center" }}>
              Start a conversation with the AI!
            </div>
          )}
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`pixel-chat-message ${msg.role === "user" ? "pixel-chat-user" : "pixel-chat-ai"}`}
              style={{
                alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                background: msg.role === "user" ? "#3a7" : "#444",
                color: "#fff",
                border: "2px solid #fff",
                borderRadius: 8,
                padding: "6px 12px",
                maxWidth: "80%",
                marginBottom: 2,
                fontFamily: "inherit",
                fontSize: 15,
                boxShadow: msg.role === "user" ? "2px 2px 0 #1a4" : "2px 2px 0 #222",
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <form
          className="pixel-chat-input-row"
          style={{
            display: "flex",
            gap: 8,
            padding: 16,
            borderTop: "2px solid #fff",
            background: "#181818",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            alignItems: "center",
          }}
          onSubmit={e => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <input
            className="pixel-chat-input"
            style={{
              flex: 1,
              background: "#222",
              color: "#fff",
              border: "2px solid #fff",
              borderRadius: 6,
              padding: "10px 12px",
              fontFamily: "inherit",
              fontSize: 16,
              outline: "none",
              boxShadow: "2px 2px 0 #000",
            }}
            placeholder="Type a message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={loading}
            autoFocus
            onKeyDown={e => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
          <button
            className="pixel-send"
            style={{
              background: "#3a7",
              color: "#fff",
              border: "2px solid #fff",
              borderRadius: 6,
              padding: "10px 22px",
              fontWeight: "bold",
              fontSize: 16,
              cursor: loading ? "not-allowed" : "pointer",
              boxShadow: "2px 2px 0 #1a4",
              height: 44,
            }}
            type="submit"
            disabled={loading || !input.trim()}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}