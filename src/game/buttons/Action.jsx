import React from "react";
import "../styles.css";

const Actions = ({ handleAttack }) => {
  return (
    <div className="container-action">
      <div style={{ paddingTop: "36%" }}>
        <button className="action-btn" onClick={handleAttack}></button>
      </div>
      <div>
        <button className="action-btn"></button>
      </div>
    </div>
  );
};

export default Actions;
