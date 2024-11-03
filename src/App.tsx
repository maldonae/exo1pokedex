import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      id: 0,
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      id: 1,
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      id: 2,
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      id: 3,
    },
    {
      name: "mew",
      imgSRC: "",
      id: 4,
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);
  return (
    <div>
      <PokemonCard pokemonData={pokemonList[pokemonIndex]} />
      <NavBar
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
        setPokemonIndex={setPokemonIndex}
        key=""
      />
      <nav>
        {pokemonList.map((pokemon, index) => (
          <button key={pokemon.name} onClick={() => setPokemonIndex(index)}>
            {pokemon.name}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default App;
