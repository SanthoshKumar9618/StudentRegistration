import React, { useState } from 'react';

const StudentForm = ({ addStudent }) => {
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    setFormData({ name: "", email: "", course: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Student</h2>
      {["name", "email", "course"].map((field) => (
        <div key={field}>
          <label>{field[0].toUpperCase() + field.slice(1)}:</label>
          <input type={field === "email" ? "email" : "text"} name={field} value={formData[field]} onChange={handleChange} required />
        </div>
      ))}
      <button type="submit">Register</button>
    </form>
  );
};

export default StudentForm;
