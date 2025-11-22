import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function GamePage() {
  return (
    <div className="game-page" style={{ padding: 32, textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 28, marginBottom: 24 }}>Game Hub</h1>
      <p style={{ marginBottom: 24 }}>Choose a team member's game section:</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
        <Link to="tedoo" className="pixel-menu-item" style={{ fontSize: 18 }}>Tedoo</Link>
        <Link to="derek" className="pixel-menu-item" style={{ fontSize: 18 }}>Derek</Link>
        <Link to="swum" className="pixel-menu-item" style={{ fontSize: 18 }}>Swum</Link>
        <Link to="kelvin" className="pixel-menu-item" style={{ fontSize: 18 }}>Kelvin</Link>
        <Link to="clyde" className="pixel-menu-item" style={{ fontSize: 18 }}>Clyde</Link>
      </div>
      <div style={{ marginTop: 32 }}>
        <Outlet />
      </div>
    </div>
  );
}
