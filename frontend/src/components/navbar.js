import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link> | 
      <Link to="/students">Student Marks</Link> | 
      <Link to="/courses">Courses</Link> | 
      <Link to="/fees">Fees</Link> | 
      <Link to="/">Logout</Link>
    </nav>
  );
}

export default Navbar;
