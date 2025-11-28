import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !course || !rating || !comments) {
      alert("Please fill all required fields");
      return;
    }

    console.log({
      name,
      course,
      rating,
      comments,
      file,
    });

    setSuccess("Feedback submitted successfully!");

    setName("");
    setCourse("");
    setRating("");
    setComments("");
    setFile(null);
  };

  return (
    <div className="container">
      <h2>Student Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Course:</label>
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />

        <label>Rating:</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        >
          <option value="">Select Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label>Comments:</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          required
        ></textarea>

        <label>Upload File:</label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button type="submit">Submit</button>
      </form>

      {success && <p className="success">{success}</p>}
    </div>
  );
}
