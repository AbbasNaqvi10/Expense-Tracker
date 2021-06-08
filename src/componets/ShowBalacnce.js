import React from "react";

const ShowBalacnce = ({ balance}) => {
  return (
    <div style={{ background: "transparent", width: "30%" }}>
      <h5 style={{ background: "transparent", fontSize:"1.5rem", marginTop:"5%" }}>You Balance</h5>
      <p style={{ background: "transparent", marginTop:"-10%", fontSize:"3rem" }}>${balance}.00</p>
    </div>
  );
};

export default ShowBalacnce;
