
function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <img
        className="blog-card-image"
        src={post.image}
        alt={post.title}
      />

      <div className="blog-card-content">
        <span className="blog-card-category">
          {post.category}
        </span>

        <h2 className="blog-card-title">
          {post.title}
        </h2>

        <p className="blog-card-excerpt">
          {post.excerpt}
        </p>

        <div className="blog-card-meta">
          <span>By {post.author}</span>
          <time dateTime={post.date}>{post.date}</time>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
