import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import StudentMarks from "./components/StudentMarks";
import Courses from "./components/Courses";
import Fees from "./components/Fees";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<StudentMarks />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/fees" element={<Fees />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
