// Receives pokemon data as props from App.jsx
function PokemonStats({ pokemon }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Base</th>
          <th>Stats</th>
        </tr>
        <tr>
          <td>HP:</td>
          <td>{pokemon.stats[0].base_stat}</td>
        </tr>
        <tr>
          <td>Attack:</td>
          <td>{pokemon.stats[1].base_stat}</td>
        </tr>
        <tr>
          <td>Defense:</td>
          <td>{pokemon.stats[2].base_stat}</td>
        </tr>
        <tr>
          <td>Sp. Attack:</td>
          <td>{pokemon.stats[3].base_stat}</td>
        </tr>
        <tr>
          <td>Sp. Defense:</td>
          <td>{pokemon.stats[4].base_stat}</td>
        </tr>
        <tr>
          <td>Speed:</td>
          <td>{pokemon.stats[5].base_stat}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default PokemonStats