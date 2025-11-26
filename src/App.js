import React from "react";
import Header from "./components/Header";
import StudentDashboard from "./components/info"; 

import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#e0f2f1", minHeight: "100vh", paddingBottom: "50px" }}>
      <Header />
     <StudentDashboard />
      <Footer />
    </div>
  );
}
export default App;

