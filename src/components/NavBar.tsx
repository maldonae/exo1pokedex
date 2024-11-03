interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
  const incremente = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      const newIndex = pokemonIndex + 1;
      setPokemonIndex(newIndex);
      if (pokemonList[newIndex]?.name === "pikachu") {
        alert("pika pikachu !!!");
      }
    }
  };

  const decremente = () => {
    if (pokemonIndex > 0) {
      const newIndex = pokemonIndex - 1;
      setPokemonIndex(newIndex);
      if (pokemonList[newIndex]?.name === "pikachu") {
        alert("pika pikachu !!!");
      }
    }
  };
  return (
    <div>
      <button type="button" onClick={decremente}>
        Précédent
      </button>
      <button type="button" onClick={incremente}>
        Suivant
      </button>
    </div>
  );
}
export default NavBar;
