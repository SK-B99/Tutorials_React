import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">Fabbles</div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Users</a>
          </li>
          {/* <li>
            <a href="#">Services</a>
          </li> */}
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">Welcome to Fabbles</p>
          <h1>
            Learn Something <span>Amazing</span> Today
          </h1>
          <p className="hero-sub">
            This is my personal website to help me learn how to make fast,
            modern, and beautiful websites that users will love with React.
          </p>
          <div className="hero-btns">
            <button className="btn-primary">Get Started</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast</h3>
            <p>Fast performance optimized for every device and screen size.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Beautiful</h3>
            <p>Stunning designs crafted with attention to every detail.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure</h3>
            <p>Built with security best practices to keep your data safe.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 MyBrand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
