import React from "react";
import './Css.css';

const IncomeExpense = ({ income, expense }) => {
  return (
    <div className="income-container" style={{ display: "flex", flexDirection: "row", width: "30%", marginTop:"-2%" }}>
      <div id="box" >
        <h4>INCOME</h4>
        <h4 id="money-plus" class="money plus">+${income}</h4>
      </div>
      <div id="box" >
        <h4>EXPENSE</h4>
        <h4 id="money-minus" class="money minus">-${(expense*-1)}</h4>
      </div>
    </div>
  );
};

export default IncomeExpense;
