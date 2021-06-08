import { Button } from "@material-ui/core";
import React from "react";

const Transactions = ({ meraFunctionHai }) => {
  const [text, setText] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const [id, setId] = React.useState(0);

  return (
    <div style={{width:"30%"}}>
      <h4>Text</h4>
      <input class="input-box" type="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)}></input>
      
      <h4>Amount <br/>(negative - expense, positive - income)</h4>
      <input class="input-box" type="number" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)}></input>

      <div>
        <button className="btn-trans" style={{marginTop:"10%"}} onClick={() => {
          setId((prevState) => parseInt(prevState) + 1);
          meraFunctionHai(text, amount, id);
        }}>
          Add Transactions
        </button>
      </div>
    </div>
  );
};

export default Transactions;
