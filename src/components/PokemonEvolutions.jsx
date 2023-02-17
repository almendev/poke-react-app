import { useEffect, useState } from 'react'
import { getEvolutionsId } from '../utils/api'

function PokemonEvolutions ({
  fetchedPokemons,
  selectedPokemon,
  setSelectedPokemon,
  setError,
}) {
  const [evolutionsId, setEvolutionsId] = useState([])

  useEffect(() => {
    getEvolutionsId(selectedPokemon)
      .then(ids => setEvolutionsId(ids))
      .catch(error => setError(error))
  }, [selectedPokemon, fetchedPokemons])

  return (
    <div className='border-dashed border-gray-400 border-[1px] bg-gray-600'>
      <div className='flex justify-start items-center'>
        <strong className='pl-2'>Evolutions</strong>
      </div>
      <div className='grid grid-cols-3 grid-flow-row h-fit px-2 pb-2 '>
        {evolutionsId.map(id => {
          return (
            <div
              key={id}
              className='flex flex-col h-fit items-center border-dashed border-gray-400 border-[1px] cursor-pointer bg-slate-300 font-semibold text-gray-800 hover:bg-pokeBlue'
              onClick={() => setSelectedPokemon(id)}
            >
              <img
                src={fetchedPokemons[id - 1].image}
                alt={fetchedPokemons[id - 1].name}
                className='w-24 h-24'
              />
              <small>{fetchedPokemons[id - 1].name}</small>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PokemonEvolutions
