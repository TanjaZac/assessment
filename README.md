# 📝 React TODO List App – GlobalState Edition

This is a responsive, multi-page TODO List web application built using **React** and **Vite**, featuring a custom-made global state management solution. The app was developed as part of a technical assignment to demonstrate the use of Context and Hooks for sharing state across components.

![Screenshot](https://github.com/TanjaZac/assessment/raw/main/screenshot.png) <!-- optional: add your screenshot here -->

---

## 🚀 Features

- Add, edit, toggle, and delete TODO items.
- Global state stored using a **custom GlobalState context** (no Redux or Zustand).
- All tasks are stored in memory (not persisted after refresh).
- Mobile-friendly UI with clean and colorful design.
- Multiple pages with routing (`Home`, `About`, and `Todos`).
- Built with modular, reusable components using clean architecture patterns.

---

## 📁 Project Structure

```bash
todo-app/
├── public/             # Static assets (index.html, icons, etc.)
├── src/
│   ├── components/     # Reusable UI components (TodoForm, TodoList, etc.)
│   ├── context/        # GlobalState implementation
│   ├── pages/          # Page views for routing
│   ├── App.jsx         # Main app with Router
│   └── main.jsx        # Entry point
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── README.md

🛠️ Technologies
React

Vite (build tool)

React Router DOM (routing)

Custom GlobalState using React Context + Hooks

Plain CSS for styling (optionally extensible with MUI or Tailwind)

JavaScript (no TypeScript) – per project requirements

🧠 System Design Overview
Global state is managed using a GlobalState.jsx provider and context hook.

All TODO operations (CRUD) are implemented in memory.

Components follow clean architecture: separation of logic, UI, and routing.

The system is extensible and designed to be testable and maintainable.

📦 Installation
Clone the repository and install dependencies:
git clone https://github.com/TanjaZac/assessment.git
cd assessment
npm install
npm run dev

Then open http://localhost:5173 in your browser.

🤖 AI Usage Disclosure
This project partially used AI assistance (ChatGPT-4o and Claude 4) for:

Project architecture planning

Code refactoring

Error handling and debugging

UI design suggestions

Task breakdown and documentation

All decisions and integrations were manually reviewed and refined.

✅ Status
✅ Core functionality completed

✅ GlobalState works with all CRUD actions

✅ UI components and routing functional

✅ Responsive styling mostly implemented

🔄 Persistence and final accessibility tweaks planned (optional)

📄 License
This project is for demonstration and educational purposes.

Feel free to fork, test or suggest improvements!


