import React, { useState, useEffect } from "react";
import API from "../api";

function Courses(){

  const [courses,setCourses] = useState([]);

  useEffect(()=>{
    API.get("/courses")
       .then(res=>setCourses(res.data));
  },[]);

  return(
    <div>
      <h2>Course Details</h2>
      {courses.map(c=>(
        <div key={c.id}>
          <p>Course: {c.courseName}</p>
          <p>Duration: {c.duration}</p>
          <p>Fees: ₹{c.fees}</p>
          <hr/>
        </div>
      ))}
    </div>
  );
}

export default Courses;
