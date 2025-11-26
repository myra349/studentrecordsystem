import React from "react";

const StudentCard = ({ student }) => {
  return (
    <div
      style={{
        backgroundColor: "#b2dfdb",
        padding: "15px",
        margin: "10px 0",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h3 style={{ margin: 0 }}>{student.name}</h3>
      <p style={{ margin: "5px 0" }}>
        Roll No: {student.rollNo} | Marks: {student.marks}
      </p>
    </div>
  );
};

export default StudentCard;
