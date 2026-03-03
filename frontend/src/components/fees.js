import React, { useState } from "react";

function Fees(){

  const [paid,setPaid] = useState("");
  const [total,setTotal] = useState("");
  const [balance,setBalance] = useState(null);

  const calculate = () => {
    setBalance(total - paid);
  };

  return(
    <div>
      <h2>Fees Details</h2>

      <input placeholder="Total Fees"
             onChange={e=>setTotal(Number(e.target.value))} />
      <input placeholder="Fees Paid"
             onChange={e=>setPaid(Number(e.target.value))} />

      <button onClick={calculate}>Calculate Balance</button>

      {balance !== null && (
        <p>Balance Due: ₹{balance}</p>
      )}
    </div>
  );
}

export default Fees;
