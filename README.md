# Nexus AI Studio 🤖✨

[![Live Web Demo](https://img.shields.io/badge/Live_Demo-Open_AI_Studio-8B5CF6.svg?style=for-the-badge&logo=googlechrome&logoColor=white)](https://zbrainsofficial.github.io/nexus-ai-studio/)
[![Stack: Full--Stack](https://img.shields.io/badge/Stack-React_19_%2B_Node.js_REST-blue.svg)](https://nodejs.org)
[![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript_5.4-3178C6.svg)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> Full-Stack AI Prompt Engineering Studio & Multi-Model Playground built with **React 19**, **TypeScript**, and **Node.js REST API**.

🌐 **Live Interactive Web Studio:** [https://zbrainsofficial.github.io/nexus-ai-studio/](https://zbrainsofficial.github.io/nexus-ai-studio/)

---

## ⚡ Architecture Overview

```
[ Web Client: React 19 + TypeScript ]
                 │
                 ├──► Live Token Estimation & Variable Substitution
                 ├──► Temperature & Top-P Hyperparameter Sliders
                 └──► Streaming Response Renderer
                          │
                          ▼ (HTTP / SSE / REST)
       [ Backend Microservice: Node.js ]
                 │
                 ├──► Model Router (/api/models)
                 ├──► Chat Completion Engine (/api/chat)
                 └──► In-Memory Execution Metrics & Health Check
```

---

## 🚀 Features

- **Full-Stack Separation of Concerns:** Decoupled modular backend REST API with zero-dependency architecture.
- **Dynamic Token Counter:** Real-time token budgeting with heuristic character ratio calculations.
- **Multi-Model Routing:** Supports dynamic switching between Omni-Modal, Code-Specialized, and Cyber Security models.
- **Glassmorphism Dark Theme:** Designed for prolonged developer workflows with zero visual fatigue.

---

## 📦 Getting Started

### 1. Run Automated Tests
```bash
npm test
```

### 2. Start the Backend REST API Server
```bash
npm start
```
Server runs locally at `http://localhost:3000`.

---

## 📜 License
MIT License. Open-source software.

<p align="right">
  <sub>Architected & Engineered by <b>Zaigham Ali Ashraf</b> (0321-6314020) • Z-Brains Systems</sub>
</p>
