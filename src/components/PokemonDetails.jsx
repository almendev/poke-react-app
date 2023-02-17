import { useEffect, useState } from 'react'
import { getPokemonData } from '../utils/api'

function PokemonDetails ({ selectedPokemon, setError }) {
  const [pokemon, setPokemon] = useState({
    id: 0,
    name: '',
    image: '',
    types: [],
    abilities: [],
    moves: [],
    stats: [],
    locations: [],
  })

  useEffect(() => {
    getPokemonData(selectedPokemon)
      .then(pokemonData => setPokemon(pokemonData))
      .catch(error => setError(error))
  }, [selectedPokemon])

  return (
    <div className='flex font-semibold'>
      <div>
        <div className='flex flex-col items-center border-dashed border-gray-400 border-[1px] w-36 bg-pokeBlue'>
          <img src={pokemon.image} alt={pokemon.name} className='w-36' />
        </div>
        <div className='flex flex-col items-center text-left my-2'>
          {pokemon.stats.map(stat => (
            <div key={stat.name} className='w-full'>
              <label htmlFor='HTML5' className='w-full text-sm text-left'>
                {stat.name}:
              </label>
              <div className='w-full h-4 border-solid border-gray-600 bg-gray-600 border-[1px]'>
                <div
                  className='bg-gray-400 w-full'
                  style={{ width: stat.value / 1.2, height: '100%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-2 mx-2'>
        <div className='w-28'>
          <div className='border-dashed border-gray-400 text-white border-[1px] px-2 text-left bg-gray-600'>
            <small>Name:</small>
          </div>
          <div className='border-dashed border-gray-400 border-[1px] px-2 text-left text-gray-800 bg-gray-300'>
            <small>{pokemon.name}</small>
          </div>
          <div className='flex space-x-1 border-dashed text-white border-gray-400 border-[1px] px-2 bg-gray-600'>
            <small>Type:</small>
          </div>
          <div className='flex space-x-1 border-dashed border-gray-400 border-[1px] px-2 text-gray-800 bg-gray-300'>
            {pokemon.types.map((type, i) => (
              <small key={i}>{type}</small>
            ))}
          </div>
          <div className='border-[1px] border-dashed text-white border-gray-400 px-2 text-left bg-gray-600'>
            <small>Abilities:</small>
          </div>
          <div className='flex flex-col h-20 space-x-1 border-dashed overflow-scroll border-gray-400 border-[1px] px-2 text-left text-gray-800 bg-gray-300'>
            {pokemon.abilities.map((ability, i) => (
              <small key={i}>{ability}</small>
            ))}
          </div>
          <div className='border-[1px] border-dashed border-gray-400 text-white px-2 text-left bg-gray-600'>
            <small>Moves:</small>
          </div>
          <div className='flex flex-col h-28 overflow-y-scroll space-x-1 border-dashed border-gray-400 border-[1px] px-2 text-left text-gray-800 bg-gray-300'>
            {pokemon.moves.map((move, i) => (
              <small key={i}>{move}</small>
            ))}
          </div>
        </div>
        <div className='w-44'>
          <div className='border-[1px] border-dashed text-white border-gray-400 px-2 text-left bg-gray-600'>
            <small>Locations:</small>
          </div>
          <div className='flex flex-col h-28 space-x-1 border-dashed overflow-scroll border-gray-400 border-[1px] px-2 text-left text-gray-800 bg-gray-300'>
            {pokemon.locations.map((location, i) => (
              <small key={i}>{location}</small>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails
