import "./App.css";
import Screen from "./game/screen";
import Pad from "./game/buttons/Pad";
import Action from "./game/buttons/Action";
import StartSelect from "./game/buttons/StartSelect";
import { use, useEffect, useState } from "react";

function App() {
  const [pokemones, setPokemones] = useState([]);

  const BASE_URL = "https://pokeapi.co/api/v2/";

  const getPokemones = async () => {
    const res = await fetch(`${BASE_URL}/pokemon`);
    const data = await res.json();
    console.log(data);
    const pokemonsDetails = await getDetails(data.results);
    setPokemones(pokemonsDetails);
  };

  const getDetails = async (results) => {
    const res = await Promise.all(results.map((result) => fetch(result.url)));
    const data = await Promise.all(res.map((gato) => gato.json()));
    return data;
  };

  const handlePress = (dir) => {
    console.log(dir);
  };

  useEffect(() => {
    getPokemones();
  }, []);

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
          <Screen pokemones={pokemones} />

          {/*container buttons*/}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {/*Botones direcciones*/}
            <Pad handlePress={handlePress} />
            {/* Botones select start*/}
            <StartSelect />
            {/*Botones A y B*/}
            <Action />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
