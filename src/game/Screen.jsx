import campo from "../images/batalla.webp";

const Screen = ({
  pokemones,
  hoverPokemon,
  selectedPokemones,
  playerHealth,
  enemyHealth,
}) => {
  console.log(selectedPokemones);

  return (
    <div className="container-screen">
      <div className="screen-text">
        <div className="screen">
          {selectedPokemones.length === 2 ? (
            <div
              style={{
                backgroundImage: `url(${campo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  flexDirection: "column",
                  width: "295px"
                }}
              >
                <div
                  style={{
                    width: "150px",
                    height: "10px",
                    backgroundColor: "#ccc",
                    marginBottom: "4px",
                  }}
                >
                  <div
                    style={{
                      width: `${enemyHealth}%`,
                      height: "100%",
                      backgroundColor: "red",
                      transition: "width 0.3s",
                    }}
                  />
                </div>
                <img
                  src={selectedPokemones[1][0].sprites?.front_default}
                  alt="Rival"
                />
              </div>
              <div
                style={{
                  width: "315px",
                  height: "50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "150px",
                    height: "10px",
                    backgroundColor: "#ccc",
                    marginBottom: "4px",
                  }}
                >
                  <div
                    style={{
                      width: `${playerHealth}%`,
                      height: "100%",
                      backgroundColor: "green",
                      transition: "width 0.3s",
                    }}
                  />
                </div>
                <img
                  src={selectedPokemones[0][0].sprites?.back_default}
                  alt="Jugador"
                />
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {pokemones?.map((pokemon) => (
                <div
                  key={pokemon.id}
                  style={{
                    backgroundColor: `${
                      hoverPokemon === pokemon.id ? "yellow" : ""
                    }`,
                  }}
                >
                  <img src={pokemon.sprites.front_default} alt="pokemones" />
                  <p style={{ fontFamily: "Pokemon Classic", fontSize: "8px" }}>
                    {pokemon.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="container-text">
          <p className="text">
            Nintendo <span>GAME BOY</span>
            <span style={{ fontSize: "8px" }}> TM</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Screen;

/*const Screen = ({pokemones}) => {



    return (
        <div
            style={{
              paddingTop: "5%",
              paddingBottom: "25%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {pokemones.map((pokemon) => {
              <img src={pokemon.front_default} alt="pokemones"/>
            })}
            <div
              style={{
                width: "85%",
                height: "200px",
                backgroundColor: "#bdae58",
              }}
            ></div>
          </div>
    );
};

export default Screen;*/
