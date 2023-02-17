import { useState, useEffect } from 'react'
import { getAllPokemons } from '../utils/api'

export default function usePokemons () {
  const [error, setError] = useState('')
  const [fetchedPokemons, setFetchedPokemons] = useState([])
  const [filteredPokemons, setFilteredPokemos] = useState([])
  const [searchText, setSearchText] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedPokemon, setSelectedPokemon] = useState(25)

  useEffect(() => {
    getAllPokemons()
      .then(data => setFetchedPokemons(data))
      .catch(error => setError(error))
  }, [])

  useEffect(() => {
    let pokemons = []
    if (searchText.length === 0) {
      pokemons = fetchedPokemons.slice(currentPage, currentPage + 6)
    } else {
      pokemons = fetchedPokemons
        .filter(pokemon => pokemon.name.includes(searchText.toLowerCase()))
        .slice(currentPage, currentPage + 6)
    }

    setFilteredPokemos(pokemons)
  }, [fetchedPokemons, searchText, currentPage])

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 6)
    }
  }

  const nextPage = () => {
    if (
      fetchedPokemons.filter(pokemon => pokemon.name.includes(searchText))
        .length >
      currentPage + 6
    ) {
      setCurrentPage(currentPage + 6)
    }
    return currentPage
  }

  return {
    error,
    setError,
    fetchedPokemons,
    filteredPokemons,
    selectedPokemon,
    setSelectedPokemon,
    searchText,
    setSearchText,
    setCurrentPage,
    prevPage,
    nextPage,
  }
}
