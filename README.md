🎮 CyberQuest — Pixel Fantasy Cybersecurity RPG

CyberQuest is an interactive pixel-art visual novel adventure that teaches cybersecurity concepts through storytelling, branching choices, and an immersive fantasy world where magic meets technology.

This project was created as part of DAHacks 4.0 (De Anza College Hackathon) under the theme:
Cybersecurity • Social Impact • Entertainment

🌟 Features
🏰 Pixel-Art Fantasy UI

A handcrafted medieval UI style with retro CRT-style pixel fonts, animated components, and responsive layout.

🧭 Landing Page

A fully designed landing page featuring:

Background pixel art

Retro title & subtitle

Start Game button

Hamburger menu with:

Main Page

AI Chat (popup)

Info Modal

(Optional future features)

🤖 AI Assistant

Built-in AI chat (OpenAI API) that:

Pops up in a modal window

Dims the background

Allows Q&A or explanations

Uses pixel UI styling

🎮 Game Integration

Pressing Start Game redirects to an external game package provided by teammates:

/public/game_file/index3.html


This allows modular development where different team members build their own game scenes in standalone HTML/JS.

🗂 Clean Project Structure
cyber-quests-rpg/
│
├── public/
│   └── game_file/      ← teammate game folder (index3.html, assets, etc.)
│
├── src/
│   ├── assets/
│   ├── components/
│   │     ├── HamburgerMenu.jsx
│   │     ├── AIChatBox.jsx
│   │     └── InfoModal.jsx
│   ├── pages/
│   │     ├── Index.tsx  ← Landing page
│   │     └── GamePage.jsx (fallback placeholder)
│
└── README.md

🚀 How to Run the Project
1️⃣ Install dependencies
npm install

2️⃣ Start development server
npm run dev


Vite will launch the site at:

👉 http://localhost:5173

(your port may vary)

📁 Adding Teammate Game Files

Each teammate can provide a fully-self-contained HTML game folder.

Place their folder here:

public/game_file/


Make sure there is an entry file:

public/game_file/index3.html


The Start Game button will automatically redirect:

window.location.href = "/game_file/index3.html";

🤝 Developers

CyberQuest was built by:

Tedoo

Derek

Swum

Kelvin

Clyde

🛠 Tech Stack

React + Vite

TypeScript

TailwindCSS / Custom Pixel Styling

OpenAI API Integration

HTML Canvas / Pixel Art UI

🔮 Future Expansion

Multi-chapter story system

Interactive cybersecurity puzzles

Inventory UI

Save/load system

More mini-games

Character dialogue sprites

Boss fight logic

📜 License

MIT License. Free to modify and expand during/after DAHacks.
