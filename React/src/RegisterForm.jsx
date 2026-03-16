import { useState } from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.username,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const newUser = await response.json();
      console.log("Registered user:", newUser);
      alert("Registration Successful!");

      // Reset form
      setFormData({ username: "", email: "", password: "", role: "student" });
    } catch (err) {
      console.error(err.message);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="student">Student</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
