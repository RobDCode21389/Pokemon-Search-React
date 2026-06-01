import { useState } from 'react'
import './App.css'
import SearchForm from './components/SearchForm'
import PokemonCard from './components/PokemonCard'

function App() {

  // Tracks what user types in search box
  const [search, setSearch] = useState('')

  // Stores Pokemon data from API
  const [pokemon, setPokemon] = useState(null)

  // Tracks if Pokemon was not found
  const [error, setError] = useState(false)

  // Function to fetch Pokemon from API
  const getPokemon = async () => {
    try {
      // Reset error on every new search
      setError(false)

      // Fetch from API using search value
      const response = await fetch(
        `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${search.toLowerCase()}`
      )
      const data = await response.json()

      // Store Pokemon data in state
      setPokemon(data)

    } catch (err) {
      // If Pokemon not found reset pokemon and show error
      setPokemon(null)
      setError(true)
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    getPokemon()
  }

  return (
    <main>
      <h1>Pokémon Search App</h1>

      {/* Container wraps EVERYTHING including the search form */}
      <div className="container">

        {/* SearchForm is now INSIDE the container */}
        <SearchForm
          search={search}
          setSearch={setSearch}
          handleSubmit={handleSubmit}
        />

        {/* Show error message if Pokemon not found */}
        {error && <p>Pokémon not found</p>}

        {/* PokemonCard handles ALL the display */}
        {pokemon && <PokemonCard pokemon={pokemon} />}

      </div>
    </main>
  )
}

export default App