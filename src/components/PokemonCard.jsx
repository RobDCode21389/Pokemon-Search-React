import PokemonTypes from "./PokemonTypes"
import PokemonStats from "./PokemonStats"

function PokemonCard({ pokemon }) {
  return (
    <div className="output">
      <div className="top-container">
        <div className="name-and-id">
          <span>{pokemon.name.toUpperCase()}</span>
          <span> #{pokemon.id}</span>
        </div>

        {/* Input from the Weight & Height of the Pokemon */}
        <div className="size">
          <span>Weight: {pokemon.weight}</span>
          {' '}
          <span>Height: {pokemon.height}</span>
        </div>

        {/* A container for the Sprite images with the size of 180px */}
        <div className="sprite-container">
          <img
            id="sprite"
            style={{width: '180px'}}
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </div>
        <PokemonTypes types={pokemon.types} />
      </div>

      <div className="bottom-container">
        <PokemonStats pokemon={pokemon} />
      </div>
    </div>
  )
}

export default PokemonCard