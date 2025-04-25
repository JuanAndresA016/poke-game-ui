import "./App.css";
import Screen from "./game/screen";
import Pad from "./game/buttons/Pad";
import Action from "./game/buttons/Action";
import StartSelect from "./game/buttons/StartSelect";
import { use, useEffect, useState } from "react";

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [hoverPokemon, setHoverPokemon] = useState(0);
  const [selectedPokemones, setSelectedPokemones] = useState([]);

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
    if (dir === "right") {
      setHoverPokemon(hoverPokemon + 1);
    }
    if (dir === "left") {
      setHoverPokemon(hoverPokemon - 1);
    }
  };

  const handleSelectPokemon = () => {
    console.log("select pokemon", hoverPokemon);
    const pokemonSelected = pokemones.filter(
      (pokemon) => pokemon.id === hoverPokemon
    );
    const selections = [pokemonSelected, computerSelection()];
    setSelectedPokemones(selections);
    setPlayerHealth(100);
    setEnemyHealth(100);
  };

  const computerSelection = () => {
    const randomId = Math.floor(Math.random() * pokemones.length);
    const selectElement = pokemones.filter(
      (pokemon) => pokemon.id === randomId
    );
    return selectElement;
  };
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);

  const handleAttack = () => {
    setEnemyHealth((prev) => Math.max(prev - 20, 0));
  };

  useEffect(() => {
    if (enemyHealth <= 0 || playerHealth <= 0) {
      setTimeout(() => {
        setSelectedPokemones([]);
        setPlayerHealth(100);
        setEnemyHealth(100);
      }, 500);
    }
  }, [enemyHealth, playerHealth]);

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
          <Screen
            pokemones={pokemones}
            hoverPokemon={hoverPokemon}
            selectedPokemones={selectedPokemones}
            playerHealth={playerHealth}
            enemyHealth={enemyHealth}
          />

          {/*container buttons*/}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {/*Botones direcciones*/}
            <Pad handlePress={handlePress} />
            {/* Botones select start*/}
            <StartSelect handleSelectPokemon={handleSelectPokemon} />
            {/*Botones A y B*/}
            <Action handleAttack={handleAttack} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
