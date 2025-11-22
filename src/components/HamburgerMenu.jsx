// Copilot: modify THIS file only.
// Replace the old menu with Main Page, AI Chat, Info, and Dark/Light Mode.

import React, { useState, useRef, useEffect } from "react";
import AIChatBox from "./AIChatBox";
import InfoModal from "./InfoModal";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const menuRef = useRef(null);

  // Click outside to close menu
  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div
      className="pixel-hamburger-menu"
      style={{
        position: "fixed",
        top: 16,
        left: 16,
        zIndex: 2000,
        userSelect: "none"
      }}
    >
      <button
        className="pixel-hamburger-icon"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open menu"
        style={{
          width: 40,
          height: 40,
          background: "#222",
          border: "2px solid #fff",
          borderRadius: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          cursor: "pointer",
          boxShadow: "2px 2px 0 #000",
          color: "#fff",
          transition: "background-color 0.2s, color 0.2s, border-color 0.2s"
        }}
      >
        <span style={{width: 24, height: 4, background: "#fff", display: "block", margin: 1, borderRadius: 2}} />
        <span style={{width: 24, height: 4, background: "#fff", display: "block", margin: 1, borderRadius: 2}} />
        <span style={{width: 24, height: 4, background: "#fff", display: "block", margin: 1, borderRadius: 2}} />
      </button>
      {open && (
        <div
          ref={menuRef}
          className="pixel-menu-dropdown"
          style={{
            position: "absolute",
            top: 48,
            left: 0,
            background: "#222",
            border: "2px solid #fff",
            borderRadius: 8,
            boxShadow: "2px 2px 0 #000",
            padding: 8,
            minWidth: 160,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            color: "#fff",
            transition: "background-color 0.2s, color 0.2s, border-color 0.2s",
            zIndex: 2100,
          }}
        >
          <button
            className="pixel-menu-item"
            style={{background: "#333", color: "#fff", border: "none", padding: 8, borderRadius: 4, cursor: "pointer", fontFamily: "inherit", borderColor: "#fff", borderWidth: 2, borderStyle: "solid", transition: "background-color 0.2s, color 0.2s, border-color 0.2s"}}
            onClick={() => {
              window.location.pathname = "/";
              setOpen(false);
            }}
          >
            Main Page
          </button>
          <button
            className="pixel-menu-item"
            style={{background: "#333", color: "#fff", border: "none", padding: 8, borderRadius: 4, cursor: "pointer", fontFamily: "inherit", borderColor: "#fff", borderWidth: 2, borderStyle: "solid", transition: "background-color 0.2s, color 0.2s, border-color 0.2s"}}
            onClick={() => {
              setShowChat(true);
              setOpen(false);
            }}
          >
            AI Chat
          </button>
          <button
            className="pixel-menu-item"
            style={{background: "#333", color: "#fff", border: "none", padding: 8, borderRadius: 4, cursor: "pointer", fontFamily: "inherit", borderColor: "#fff", borderWidth: 2, borderStyle: "solid", transition: "background-color 0.2s, color 0.2s, border-color 0.2s"}}
            onClick={() => {
              setShowInfo(true);
              setOpen(false);
            }}
          >
            Info
          </button>
        </div>
      )}
      <AIChatBox open={showChat} onClose={() => setShowChat(false)} />
      <InfoModal open={showInfo} onClose={() => setShowInfo(false)} />
    </div>
  );
}