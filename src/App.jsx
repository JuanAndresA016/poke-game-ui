import "./App.css";
import Screen from "./game/screen";
import Pad from "./game/buttons/Pad";
import Action from "./game/buttons/Action";
import StartSelect from "./game/buttons/StartSelect";

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* container game*/}
        <div
          style={{
            width: "350px",
            height: "500px",
            backgroundColor: "#eee",
            border: "2px black solid",
            borderRadius: "5px 5px 35px 5px",
          }}
        >
          {/*container screen*/}
          <Screen/>

          {/*container buttons*/}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {/*Botones direcciones*/}
            <Pad/>
              {/* Botones select start*/}
              <StartSelect/>
            {/*Botones A y B*/}
            <Action/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
