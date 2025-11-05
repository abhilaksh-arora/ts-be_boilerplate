# 🚀 Express + TypeScript + Biome Starter

A modern, production-ready boilerplate for building **scalable, secure, and maintainable RESTful APIs** using **Express.js** and **TypeScript**, with automated code quality checks powered by **Biome**.

## 👨‍💻 Author

**Abhilaksh Arora**  
🌐 [https://abhilaksharora.com](https://abhilaksharora.com)

---

## 📦 Tech Stack

- **Express.js** – Lightweight and flexible Node.js framework for building APIs.
- **TypeScript** – Strongly typed JavaScript for better safety and tooling.
- **Biome** – Unified formatter and linter for consistent, clean code.
- **dotenv** – Simple environment variable management.
- **cors** – Middleware for enabling Cross-Origin Resource Sharing.
- **helmet** – Adds essential HTTP headers for improved security.
- **morgan** – HTTP request logger for debugging and analytics.
- **winston** – Configurable, multi-transport logging system.
- **luxon** – Powerful date and time utilities.
- **zod** – Type-safe schema validation and runtime checks.

---

## ✨ Key Features

- 🧱 **Modular & layered architecture** – Designed for clarity and scalability.
- 🛡️ **Security-first setup** – Preconfigured with Helmet and CORS.
- 🔐 **Auth-ready structure** – Easy to extend with JWT or OAuth.
- ⚙️ **Config-driven design** – Environment-specific configuration management.
- 🧪 **Centralized error handling** – Simplifies debugging and response management.
- 🧾 **Advanced logging** – Winston integration for structured logging.
- ✅ **Schema validation** – Input validation powered by Zod.
- 💅 **Code consistency** – Linting and formatting with Biome.
- ⚡ **Vercel deployment support** – Ready for one-click deployment.

---

## 🧭 Folder Structure

```
ts-be_boilerplate/
├── .env                        # Environment variables
├── .env.example                # Example env file
├── .gitignore
├── .husky/                     # Git hooks (e.g., pre-commit)
│   └── pre-commit
├── api/                        # Optional API layer entry
│   └── index.ts
├── biome.json                  # Biome configuration
├── config/                     # Environment-based configurations
│   ├── custom-environment-variables.json
│   ├── default.json
│   ├── development.json
│   ├── production.json
│   └── stage.json
├── public/                     # Static assets
│   └── index.html
├── src/                        # Main application source
│   ├── app.ts                  # Express app setup
│   ├── index.ts                # Server entry point
│   ├── connections/            # Database & service connections
│   ├── controllers/            # Route controllers
│   │   └── health.ts
│   ├── interactor/             # Core business logic
│   ├── lib/                    # Reusable utilities & helpers
│   │   ├── controllerWrapper.ts
│   │   └── error/
│   │       └── custom.error.ts
│   ├── middlewares/            # Express middlewares
│   │   ├── middlewares.ts
│   │   └── response.ts
│   ├── models/                 # Data models
│   ├── routes.ts               # API routes
│   ├── services/               # Service layer for integrations
│   └── utils/                  # Utility functions
│       ├── logger.ts
│       └── winstonLogger.ts
├── package.json
├── tsconfig.json
└── vercel.json                 # Deployment configuration
```

---

Absolutely 👍 — here’s a clean and nicely formatted **README section** you can directly paste under your project setup instructions (e.g., after “Getting Started”).

It fits your current README style perfectly 👇

---

## 🪜 Step-by-Step: Using This Boilerplate Safely

Follow these steps to set up your own project using this boilerplate without affecting the original repository.

### 1️⃣ Clone the Boilerplate

```bash
git clone https://github.com/arnavsharma2711/express-ts-boilerplate.git
```

### 2️⃣ Enter the Project Folder

```bash
cd express-ts-boilerplate
```

### 3️⃣ Remove the Existing Git History

Remove the original Git configuration so your commits don’t mix with the boilerplate’s history.

```bash
rm -rf .git
```

### 4️⃣ Initialize a New Git Repository

Start fresh with your own Git setup.

```bash
git init
```

### 5️⃣ Add All Files and Make an Initial Commit

```bash
git add .
git commit -m "Initial commit from Express + TypeScript + Biome boilerplate"
```

### 6️⃣ Create a New Repository on GitHub

Go to 👉 [https://github.com/new](https://github.com/new)
and create a new repository (e.g., `my-api-backend`).

### 7️⃣ Add Your New Remote Origin

Replace `<your-username>` and `<your-repo-name>` with your actual details:

```bash
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
```

Verify that the new remote has been added:

```bash
git remote -v
```

### 8️⃣ Push Your New Project

```bash
git branch -M main
git push -u origin main
```

---

💡 **Tip:**
If you ever want to check or change the remote origin later:

```bash
git remote -v               # view current remote
git remote set-url origin https://github.com/<new-repo>.git
```

---

## 🛠️ Available Scripts

| Command          | Description                                                     |
| ---------------- | --------------------------------------------------------------- |
| `npm run dev`    | Run server in development mode with live reload via ts-node-dev |
| `npm run build`  | Compile TypeScript to JavaScript                                |
| `npm run start`  | Start the compiled server                                       |
| `npm run format` | Auto-format code using Biome                                    |
| `npm run lint`   | Lint code with Biome                                            |

---

## 🌐 Deployment

Deployment is seamless with **Vercel**.
Simply push your code to GitHub and import the repository into Vercel — it will detect the configuration automatically via `vercel.json`.

---
