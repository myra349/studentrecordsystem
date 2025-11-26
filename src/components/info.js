import React, { useState } from "react";


// Dummy data (simulate backend)
const studentData = [
  { name: "John Doe", rollNo: "101", course: "B.Tech", year: "3rd Year", class: "CSE", marks: 95 },
  { name: "Jane Smith", rollNo: "102", course: "B.Tech", year: "2nd Year", class: "ECE", marks: 88 },
  { name: "Alice Johnson", rollNo: "103", course: "B.Sc", year: "1st Year", class: "Physics", marks: 92 },
  { name: "Bob Brown", rollNo: "104", course: "B.Tech", year: "4th Year", class: "IT", marks: 85 }
];

const StudentDashboard = () => {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const found = studentData.find(
      (s) =>
        s.name.toLowerCase() === name.toLowerCase() &&
        s.rollNo === rollNo &&
        s.course === course &&
        s.year === year
    );
    if (found) {
      setStudent(found);
    } else {
      setStudent(null);
      setError("No student found with given details");
    }
  };

  return (
    <div className="dashboard-container">
      <h1>🎓 Student Dashboard</h1>

      <form className="student-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label>Roll Number:</label>
          <input
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            placeholder="Enter your roll number"
            required
          />
        </div>

        <div className="form-group">
          <label>Course:</label>
          <select value={course} onChange={(e) => setCourse(e.target.value)} required>
            <option value="">Select Course</option>
            <option value="B.Tech">B.Tech</option>
            <option value="B.Sc">B.Sc</option>
            <option value="BBA">BBA</option>
          </select>
        </div>

        <div className="form-group">
          <label>Year:</label>
          <select value={year} onChange={(e) => setYear(e.target.value)} required>
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">View Details</button>
      </form>

      {error && <p className="error">{error}</p>}

      {student && (
        <div className="student-card">
          <h2>{student.name}</h2>
          <p><strong>Roll Number:</strong> {student.rollNo}</p>
          <p><strong>Course:</strong> {student.course}</p>
          <p><strong>Year/Class:</strong> {student.year} - {student.class}</p>
          <p><strong>Marks:</strong> {student.marks}</p>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
