# React Blog UI

A responsive blog interface built with React.js and Vite. The application displays blog posts from a JSON file and provides search and category filtering functionality.

## Features

- Displays blog posts as reusable cards.
- Loads blog data from a separate JSON file.
- Searches articles by title and description.
- Supports case-insensitive searching.
- Filters posts by category.
- Combines search and category filtering.
- Includes a Reset Filters button.
- Displays a message when no articles match the search.
- Provides a responsive layout for desktop, tablet, and mobile screens.

## Technologies Used

- React.js
- JavaScript
- JSX
- HTML5
- CSS3
- JSON
- Vite
- npm

## Project Structure

```text
React-Blog-UI/
├── public/
├── src/
│   ├── components/
│   │   └── BlogCard.jsx
│   ├── data/
│   │   └── posts.json
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

## Prerequisites

Install the following software before running the project:

- Node.js
- npm

## Installation and Setup

1. Open the project folder in VS Code.
2. Open the integrated terminal.
3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal in your browser.

## Build for Production

Run the following command to create a production build:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

## How to Use

1. Open the application in your browser.
2. Browse the available blog posts.
3. Enter a keyword in the search bar to find matching articles.
4. Select a category from the dropdown to filter the posts.
5. Combine the search and category filter to narrow the results.
6. Click **Reset Filters** to clear the search and display all posts.

## Blog Data

Sample blog posts are stored in `src/data/posts.json`. Each post contains an ID, title, excerpt, category, author, date, and image URL.

You can add more posts by following the same JSON structure.

## Learning Outcomes

This project provides practical experience with React components, props, state, event handling, JSON data, array methods such as `map()` and `filter()`, and responsive CSS.

## Project Status

Completed as a React.js learning assignment. The application has been tested, and the production build completes successfully.