interface PokemonProps {
  pokemonData: {
    name: string;
    imgSrc?: string;
  };
}
function PokemonCard({ pokemonData }: PokemonProps) {
  return (
    <figure>
      {pokemonData.imgSrc !== undefined ? (
        <img src={pokemonData.imgSrc} alt={pokemonData.name} />
      ) : (
        <p>"???"</p>
      )}
      <figcaption>{pokemonData.name}</figcaption>
    </figure>
  );
}
export default PokemonCard;
