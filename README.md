# Wordle React

### 🚀 Deployed [here](https://fmarcio.github.io/wordle-react/)

A modern, type-safe clone of the popular word-guessing game **Wordle**, built using **React**, **Vite**, and **TypeScript**.

## 📝 Overview

This repo is inspired by [Pedro Machado's (machadop1407) Project](https://github.com/machadop1407/chartjs-react-tutorial). Additionaly there's some refactoring done by myself.

This project is a functional recreation of Wordle, where players have six attempts to guess a secret five-letter word. Each guess provides feedback in the form of colored tiles:

- 🟩 **Green**: The letter is in the word and in the correct spot.
- 🟨 **Yellow**: The letter is in the word but in the wrong spot.
- ⬜ **Gray**: The letter is not in the word in any spot.

Gemini was used to debugging and speeding up the development process.

### Key Features

- **Dynamic Board**: Interactive 6x5 grid for word entries.
- **Virtual Keyboard**: On-screen keyboard that tracks used letters and their status.
- **Keyboard Support**: Full support for physical keyboard input (Letters, Enter, Backspace).
- **Word Validation**: Checks guesses against a comprehensive word bank.
- **Responsive Design**: Playable on both desktop and mobile devices.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Styling**: Vanilla CSS
- **Deployment**: [GitHub Pages](https://pages.github.com/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fmarcio/wordle-react.git
   ```
2. Navigate to the project directory:
   ```bash
   cd wordle-react
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server:

```bash
npm run dev
```

### Building for Production
To create a production-ready bundle in the `dist/` folder:
```bash
npm run build
```

### Running Tests
The project includes unit tests using Jest and React Testing Library to ensure core functionality. To run the tests:
```bash
npm test
```

### Deployment

To deploy the project to GitHub Pages:

```bash
npm run deploy
```
