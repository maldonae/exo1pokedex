interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
  key: string;
}

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
  const incremente = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };
  const decremente = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  return (
    <div>
      {/* <nav>
      <button type="button" onClick={decremente}>
        Précédent
      </button>
      <button type="button" onClick={incremente}>
        Suivant
      </button>
      </nav> */}
    </div>
  );
}
export default NavBar;
