// Receives pokemon data as props from App.jsx
function PokemonTypes({ types }) {
  return (
    <div id="types">
      {/* Map through the types array */}
      {types.map((obj) => (
        <span 
          key={obj.type.name}
          className={`type ${obj.type.name}`}
        >
          {obj.type.name}
        </span>
      ))}
    </div>
  )
}

export default PokemonTypes