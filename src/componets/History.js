import React from 'react'

const History = ({ deleteTask, transactions}) => {
    
    console.log(transactions)
    return (
        <div style={{width: "30%" }}>
            <h4 style={{fontSize:"1.5rem" }}>History</h4>
            <div>
                {transactions.map((x) => (<div className="list" id="list" style={{ borderRight: `${x.amount > 0 ? "5px solid #2ecc71" : "5px solid #c0392b"}` }} >{x.text} <span>{x.amount>0 ? "+" : "-"}${x.amount<0?(x.amount*-1): x.amount}</span>    {<button className="delete-btn" onClick={(e) => {
                    deleteTask(e,x.id);
                    console.log(x.id)}}>X</button>}</div>))}
            </div>
        </div>
    )
}

export default History
