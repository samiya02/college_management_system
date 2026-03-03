import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Register() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const register = async () => {

    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }

    try{
      await API.post("/auth/register",{email,password});
      alert("Registration Successful");
      navigate("/");
    }catch(error){
      alert(error.response.data);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Email"
             onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password"
             onChange={e=>setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password"
             onChange={e=>setConfirmPassword(e.target.value)} />
      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;
