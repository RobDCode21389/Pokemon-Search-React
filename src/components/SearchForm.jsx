function SearchForm({ search, setSearch, handleSubmit }) {
  return (
    // Add id="search-form" right here
    <form id="search-form" onSubmit={handleSubmit}>

      {/* Label for the search input */}
      <label>Search for Pokémon Name or ID:</label>

      {/* Input tracks what user types via search state */}
      <input
        type="text"
        id="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
      />

      {/* Button submits the form */}
      <button id="search-button" type="submit">Search</button>

    </form>
  )
}

export default SearchForm