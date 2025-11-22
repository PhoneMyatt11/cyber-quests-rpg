import React, { useEffect, useRef } from "react";

export default function InfoModal({ open, onClose }) {
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

  if (!open) return null;
  return (
    <>
      <div
        id="info-backdrop"
        ref={backdropRef}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(2px)",
          zIndex: 10000,
        }}
      />
      <div
        className="pixel-modal info-modal pixel-box"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10001,
          maxWidth: 420,
          width: "92vw",
          background: "#232323",
          border: "4px solid #fff",
          borderRadius: 12,
          boxShadow: "0 0 0 4px #000, 4px 4px 0 #000",
          padding: "2.5rem 2rem 2rem 2rem",
          fontFamily: "'Press Start 2P', monospace, sans-serif",
          color: "#fff",
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
        <h2 style={{ textAlign: "center", fontSize: 22, marginBottom: 18, fontFamily: "'Press Start 2P', monospace, sans-serif", letterSpacing: 1 }}>
          About CyberQuest
        </h2>
        <p style={{ textAlign: "center", fontSize: 15, marginBottom: 24, lineHeight: 1.5 }}>
          CyberQuest is an educational fantasy adventure designed to teach players cybersecurity concepts through immersive storytelling and interactive choices.
        </p>
        <h3 style={{ textAlign: "center", fontSize: 16, marginBottom: 10, fontFamily: "'Press Start 2P', monospace, sans-serif" }}>
          Developers
        </h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, textAlign: "center", fontSize: 15 }}>
          <li>Tedoo</li>
          <li>Derek</li>
          <li>Swum</li>
          <li>Kelvin</li>
          <li>Clyde</li>
        </ul>
      </div>
    </>
  );
}