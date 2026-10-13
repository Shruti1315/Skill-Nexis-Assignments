
import { useState } from "react";
import BlogCard from "./components/BlogCard";
import posts from "./data/posts.json";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All Categories");

  const categories = [
    "All Categories",
    ...new Set(posts.map((post) => post.category)),
  ];

  const filteredPosts = posts.filter((post) => {
    const query = searchQuery.toLowerCase().trim();

    const matchesSearch =
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query);

    const matchesCategory =
      selectedCategory === "All Categories" ||
      post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  function resetFilters() {
    setSearchQuery("");
    setSelectedCategory("All Categories");
  }

  return (
    <main className="blog-page">
      <header className="blog-header">
        <p className="blog-eyebrow">THE BLOG</p>

        <h1>Ideas Worth Sharing</h1>

        <p className="blog-subtitle">
          Explore articles about web development,
          programming, AI, and data science.
        </p>

        <div className="search-container">
          <label className="search-label" htmlFor="blog-search">
            Search articles
          </label>

          <div className="search-box">
            <span className="search-icon" aria-hidden="true">
              🔍
            </span>

            <input
              id="blog-search"
              type="search"
              className="search-input"
              placeholder="Search by title or description..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>

          <p className="search-results-count" aria-live="polite">
            {filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "article" : "articles"} found
          </p>
        </div>

        <div className="category-container">
          <label className="category-label" htmlFor="category-filter">
            Filter by category
          </label>

          <select
            id="category-filter"
            className="category-select"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          className="reset-button"
          onClick={resetFilters}
        >
          Reset Filters
        </button>
      </header>

      {filteredPosts.length > 0 ? (
        <section className="blog-grid" aria-label="Blog posts">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </section>
      ) : (
        <div className="empty-state">
          <h2>No articles found</h2>
          <p>Try another search term or select a different category.</p>
        </div>
      )}
    </main>
  );
}

export default App;
