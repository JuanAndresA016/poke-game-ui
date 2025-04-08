const Screen = ({ pokemones }) => {
  console.log(pokemones);

  return (
    <div className="container-screen">
      <div className="screen-text">
        <div className="screen">
          {pokemones?.map((pokemon) => (
            <div>
            <img src={pokemon.sprites.front_default} alt="pokemones" />
            <p style={{fontFamily: "Pokemon Classic", fontSize:"8px"}}>{pokemon.name}</p>
            </div>
          ))}
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
