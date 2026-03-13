import { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <div className="contact-card">
        {submitted ? (
          <div className="success-msg">
            <div className="success-icon">✉️</div>
            <h2>Message Sent!</h2>
            <p>Thanks for reaching out. We'll get back to you soon.</p>
            <button className="back-btn" onClick={() => setSubmitted(false)}>
              Send Another
            </button>
          </div>
        ) : (
          <>
            <div className="contact-header">
              <h1>Get in Touch</h1>
              <p>Fill out the form and we'll respond within 24 hours.</p>
            </div>
            <div className="contact-body">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="What's on your mind?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
