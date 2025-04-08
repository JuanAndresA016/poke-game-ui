import React from "react";

const StartSelect = () => {
  return (
    <div style={{ paddingTop: "35%" }}>
      {/* Botones select start*/}
      <div
        style={{
          width: "60px",
          height: "60px",
          display: "flex",
          /*backgroundColor: "grey",*/
        }}
      >
        <div>
          <button
            style={{
              width: "40px",
              height: "10px",
              display: "flex",
              borderRadius: "5px",
              backgroundColor: "#999",
              transform: "rotate(-25deg)",
              marginTop: "75px",
            }}
          ></button>
        </div>
        <div>
          <button
            style={{
              width: "40px",
              height: "10px",
              display: "flex",
              borderRadius: "5px",
              backgroundColor: "#999",
              transform: "rotate(-25deg)",
              marginTop: "75px",
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default StartSelect;
