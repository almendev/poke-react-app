const baseUrl = 'https://pokeapi.co/api/v2'

// Gets pokemon ID from url
const getPokemonId = url => {
  const urlSplitted = url.split('/')
  return urlSplitted[6]
}

// Return pokemon image url
export const getPokemonImage = id => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

// Gets 902 pokemons
export const getAllPokemons = async () => {
  // Fetching pokemons urls
  const response = await fetch(`${baseUrl}/pokemon?limit=902`)
  const data = await response.json()

  // Convert urls to { id, name, image }
  const pokemons = data.results.map(pokemon => {
    const id = getPokemonId(pokemon.url)
    return {
      id,
      name: pokemon.name,
      image: getPokemonImage(id),
    }
  })

  return pokemons
}

export const getEvolutionsId = async id => {
  // Gets the evolution chain url
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}/`
  )
  const data = await response.json()
  const evoChainUrl = data.evolution_chain.url

  // Gets data form evolution chain url
  const evoResponse = await fetch(evoChainUrl)
  const evoData = await evoResponse.json()

  const getEvoFromPath = pokemon => {
    evos.push(getPokemonId(pokemon.species.url))
    if (pokemon.evolves_to.length > 0) {
      pokemon.evolves_to.map(evo => getEvoFromPath(evo))
    }
  }

  const evos = []
  const currentPokemon = evoData.chain
  getEvoFromPath(currentPokemon)

  return evos
}

export const getPokemonData = async id => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  const data = await response.json()

  const name = data.name

  const types = data.types.map(poke => {
    return poke.type.name
  })

  const abilities = data.abilities.map(poke => {
    return poke.ability.name
  })

  const moves = data.moves.map(poke => {
    return poke.move.name
  })

  const image = getPokemonImage(id)

  const stats = data.stats.map(stat => {
    return {
      name: stat.stat.name,
      value: stat.base_stat,
    }
  })

  const locationsResponse = await fetch(data.location_area_encounters)
  const locationsData = await locationsResponse.json()
  const locations = locationsData.map(location =>
    location.location_area.name.split('-').join(' ')
  )

  const pokemon = {
    id,
    name,
    image,
    types,
    abilities,
    moves,
    stats,
    locations,
  }

  return pokemon
}
