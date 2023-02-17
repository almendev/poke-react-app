function PokemonSearch({ searchText, setSearchText, setCurrentPage }) {
  const onChangeHandle = event => {
    setCurrentPage(0)
    setSearchText(event.target.value)
  }

  return (
    <>
      <input
        type='text'
        onChange={onChangeHandle}
        value={searchText}
        placeholder='Catch a new Pokemon'
        className='w-96 h-12 bg-gray-600 border-b-[1px] border-solid border-gray-300 my-4 px-2 placeholder:font-main '
      />
    </>
  )
}

export default PokemonSearch
