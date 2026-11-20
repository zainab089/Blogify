
import React from "react";
import "./App.css";

const blogs = [
  {
    category: "Technology",
    title: "The Future of Artificial Intelligence",
    description: "Discover how AI is transforming our world and creating new possibilities.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    author: "Sarah Johnson",
    date: "November 18, 2026",
  },
  {
    category: "Lifestyle",
    title: "Simple Habits for a Better Life",
    description: "Learn how small daily habits can bring positive changes to your life.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800",
    author: "Emily Rose",
    date: "November 15, 2026",
  },
  {
    category: "Travel",
    title: "Explore the Beauty of Our World",
    description: "Discover amazing destinations and unforgettable travel experiences.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
    author: "David Smith",
    date: "November 12, 2026",
  },
];

function App() {
  return (
    <div className="website">

      <nav className="navbar">
        <h2 className="logo">Blog<span>ify.</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#blogs">Blogs</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#blogs" className="nav-button">Explore Blogs →</a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <span className="tag">WELCOME TO BLOGIFY ✨</span>

          <h1>
            Discover Stories.
            <span> Inspire Your Mind.</span>
          </h1>

          <p>
            Explore ideas, discover new perspectives and read
            inspiring stories from different corners of the world.
            Your next favorite story starts here.
          </p>

          <a href="#blogs" className="main-button">
            Explore Articles →
          </a>

          <div className="stats">
            <div><h3>120+</h3><p>Articles</p></div>
            <div><h3>50+</h3><p>Writers</p></div>
            <div><h3>10K+</h3><p>Readers</p></div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900"
            alt="Writing desk"
          />
        </div>
      </section>

      <section className="about" id="about">
        <span className="tag">EXPLORE TOPICS</span>
        <h2>Discover Your Interests</h2>
        <p>Find something interesting to read today.</p>

        <div className="categories">
          <div className="category"><span>💻</span><h3>Technology</h3></div>
          <div className="category"><span>🌿</span><h3>Lifestyle</h3></div>
          <div className="category"><span>✈️</span><h3>Travel</h3></div>
          <div className="category"><span>🎨</span><h3>Creativity</h3></div>
        </div>
      </section>

      <section className="blogs" id="blogs">
        <div className="blog-heading">
          <div>
            <span className="tag">OUR LATEST STORIES</span>
            <h2>Featured Articles</h2>
            <p>Read our latest stories and ideas.</p>
          </div>
          <a href="#blogs">View All →</a>
        </div>

        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.image} alt={blog.title} />

              <div className="blog-info">
                <span className="blog-category">{blog.category}</span>
                <p className="date">{blog.date}</p>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>

                <div className="author">
                  <span>By {blog.author}</span>
                  <span>5 min read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="newsletter">
        <span>STAY INSPIRED ✉️</span>
        <h2>Never Miss a Story!</h2>
        <p>Get fresh ideas and inspiring stories in your inbox.</p>

        <form onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you for subscribing!");
        }}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe →</button>
        </form>
      </section>

      <footer id="contact">
        <h2 className="logo">Blog<span>ify.</span></h2>
        <p>A place where stories, ideas and inspiration come together.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#blogs">Blogs</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="copyright">© 2026 Blogify. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
