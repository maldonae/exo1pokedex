import { card, cardImg } from "./PokemonCard.module.css";

interface PokemonProps {
  pokemonData: {
    name: string;
    imgSrc?: string;
  };
}

function PokemonCard({ pokemonData }: PokemonProps) {
  return (
    <figure className={card}>
      {pokemonData.imgSrc !== undefined ? (
        <img
          className={cardImg}
          src={pokemonData.imgSrc}
          alt={pokemonData.name}
        />
      ) : (
        <p>"???"</p>
      )}
      <figcaption>{pokemonData.name}</figcaption>
    </figure>
  );
}
export default PokemonCard;
