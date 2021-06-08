import React, { useState } from "react";
import History from "./History";
import IncomeExpense from "./IncomeExpense";
import ShowBalacnce from "./ShowBalacnce";
import Transactions from "./Transactions";

const Home = () => {
  const [showTransButton, setShowTransButton] = React.useState(false);

  const [trans, setTrans] = useState([]);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);


  const getTransactions = (text, amount, id) => {
    if (amount > 0) {
      setIncome((prevState) => parseInt(prevState) + parseInt(amount));
      setBalance((prevState) => parseInt(prevState) + parseInt(amount));
    }
    else {
      setExpense((prevState) => parseInt(prevState) + parseInt(amount));
      setBalance((prevState) => parseInt(prevState) + parseInt(amount));
    }
    setTrans((prev) => [...prev, { text, amount, id }]);
  };

  const deleteTask = (e, id) => {
    e.preventDefault();
    setTrans(trans.filter((t) => t.id !== id));
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", margin:"10%" }}
    >
      <h1>Expense Tracker</h1>
      <ShowBalacnce balance={balance} />
      <IncomeExpense income={income} expense={expense} />
      <History deleteTask={deleteTask} transactions={trans} />
      <h3><button style={{width: "100%", fontSize:"1.5rem", backgroundColor:"transparent", border:"none", fontWeight:"bold", marginLeft:"-17%", cursor:"pointer" }} onClick={() => setShowTransButton((prevState) => !prevState)}>
        Add new transaction
      </button></h3>

      {showTransButton && <Transactions meraFunctionHai={getTransactions} />}
    </div>
  );
};

export default Home;
