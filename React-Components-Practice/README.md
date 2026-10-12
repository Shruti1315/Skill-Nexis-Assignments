
# React Components Practice

A beginner-friendly React project built to practice reusable components, props, state, event handling, and form handling using React and Vite.

## Project Overview

This project demonstrates how to create reusable React components and combine them into a working web application.

## Technologies Used

- React.js
- JavaScript and JSX
- HTML
- CSS
- Vite
- npm

## Features

### 1. Header
Displays the project title and navigation links.

### 2. Footer
Displays copyright information and footer text.

### 3. Card
Displays reusable cards with different titles, descriptions, and categories using props.

Multiple cards are rendered dynamically using JavaScript's `map()` method and unique keys.

### 4. Button
Demonstrates reusable buttons with different labels, variants, and click handlers.

Includes an interactive counter with Increase Count and Reset Counter actions.

### 5. Form
Includes name and email inputs, controlled using React state.

The form demonstrates required-field validation, submission handling, and displaying submitted information.

## React Concepts Practiced

- Functional components
- Component reuse
- Props
- JSX
- State using `useState`
- Event handling
- Dynamic rendering using `map()`
- Unique keys in lists
- Controlled form inputs
- Conditional rendering
- CSS styling and responsive layouts

## Project Structure

```text
React-Components-Practice/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Card.jsx
│   │   ├── Button.jsx
│   │   └── Form.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## How to Run the Project

### Prerequisites

Install Node.js and npm.

### 1. Open the project folder

Open the `React-Components-Practice` folder in VS Code.

### 2. Install dependencies

Open the VS Code terminal and run:

```bash
npm install
```

### 3. Start the development server

Run:

```bash
npm run dev
```

Open the local URL displayed in the terminal to view the application.

### 4. Create a production build

Run:

```bash
npm run build
```

Vite generates the production-ready files in the `dist` folder.

## Notes

- This is a learning and demonstration project.
- Form submissions are handled in the browser and are not stored in a database.
- No backend or authentication service is included.

## Author

Created as a React components practice assignment.
