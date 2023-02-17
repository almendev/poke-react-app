import PokemonDetails from './components/PokemonDetails'
import PokemonEvolutions from './components/PokemonEvolutions'
import PokemonList from './components/PokemonList'
import PokemonSearch from './components/PokemonSearch'
import Error from './components/Error'
import usePokemons from './components/usePokemons'
import './App.css'

function App () {
  const {
    error,
    setError,
    searchText,
    setSearchText,
    fetchedPokemons,
    filteredPokemons,
    selectedPokemon,
    setSelectedPokemon,
    currentPage,
    setCurrentPage,
    prevPage,
    nextPage,
  } = usePokemons()
  return (
    <div className='App'>
      {error && <Error error={error} />}
      {!error && (
        <div>
          <h1 className='text-pokeYellow h-full text-2xl'>POKEAPP</h1>
          <div className='w-full'>
            <PokemonSearch
              searchText={searchText}
              setSearchText={setSearchText}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <div className='flex justify-center'>
            <PokemonList
              filteredPokemons={filteredPokemons}
              searchText={searchText}
              currentPage={currentPage}
              prevPage={prevPage}
              nextPage={nextPage}
              setSelectedPokemon={setSelectedPokemon}
            />
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-col md:flex-row justify-between'>
              <PokemonDetails
                fetchedPokemons={fetchedPokemons}
                selectedPokemon={selectedPokemon}
                setError={setError}
              />
              <div>
                <PokemonEvolutions
                  fetchedPokemons={fetchedPokemons}
                  selectedPokemon={selectedPokemon}
                  setSelectedPokemon={setSelectedPokemon}
                  setError={setError}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
