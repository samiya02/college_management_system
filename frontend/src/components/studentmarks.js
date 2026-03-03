import React, { useState, useEffect } from "react";
import API from "../api";

function StudentMarks(){

  const [students,setStudents] = useState([]);
  const [search,setSearch] = useState("");

  useEffect(()=>{
    API.get("/students")
       .then(res=>setStudents(res.data));
  },[]);

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return(
    <div>
      <h2>Student Marks</h2>
      <input placeholder="Search by Name"
             onChange={e=>setSearch(e.target.value)} />

      {filtered.map(s=>(
        <div key={s.id}>
          <p>Name: {s.name}</p>
          <p>Department: {s.department}</p>
          <p>Marks: {s.marks}</p>
          <hr/>
        </div>
      ))}
    </div>
  );
}

export default StudentMarks;
