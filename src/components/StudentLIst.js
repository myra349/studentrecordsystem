import React, { useEffect, useState } from "react";
import { getStudents } from "../api/studentApi";
import StudentCard from "./StudentCard";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getStudents()
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>;
  if (error)
    return (
      <p style={{ textAlign: "center", color: "red", marginTop: "50px" }}>
        {error}
      </p>
    );

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "30px auto",
        padding: "20px",
      }}
    >
      {students.length === 0 ? (
        <p style={{ textAlign: "center" }}>No students found</p>
      ) : (
        students.map((student, index) => <StudentCard key={index} student={student} />)
      )}
    </div>
  );
};

export default StudentList;
