function PokemonList ({
  filteredPokemons,
  setSelectedPokemon,
  prevPage,
  nextPage,
}) {
  return (
    <section className='flex flex-col'>
      <div className='grid grid-cols-3 grid-flow-row min-w-[384px] md:min-w-[706px] md:grid-cols-6 p-2 border-dashed border-gray-400 border-[1px] bg-gray-600'>
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map(pokemon => {
            const { id, name, image } = pokemon
            return (
              <div
                key={id}
                className='flex flex-col items-center border-dashed border-gray-400 border-[1px] cursor-pointer font-semibold text-gray-800 bg-gray-300 hover:bg-pokeBlue'
                onClick={() => setSelectedPokemon(id)}
              >
                <img src={image} alt={name} className='w-24 h-24' />
                <small>{name}</small>
              </div>
            )
          })
        ) : (
          <div className='flex flex-col h-[122px] w-[98px] justify-center text-6xl items-center border-dashed border-gray-400 border-[1px] cursor-pointer font-semibold text-gray-800 bg-gray-300 hover:bg-pokeBlue'>
            ?
          </div>
        )}
      </div>
      <div className='flex gap-2 justify-center'>
        <button
          onClick={prevPage}
          className='px-4 py-2 my-4 bg-gray-600 hover:bg-pokeBlue rounded-md'
        >
          <svg
            height='21'
            viewBox='0 0 21 21'
            width='21'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m4.5 8.5-4-4 4-4'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              transform='translate(7 6)'
            />
          </svg>
        </button>
        <button
          onClick={nextPage}
          className='px-4 py-2 my-4 bg-gray-600 hover:bg-pokeBlue rounded-md'
        >
          <svg
            height='21'
            viewBox='0 0 21 21'
            width='21'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m.5 8.5 4-4-4-4'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              transform='translate(9 6)'
            />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default PokemonList
