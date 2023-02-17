function Error({ error }) {
  return (
    <>
      <h1 className='text-pokeYellow h-full mb-6'>PokeApp</h1>
      <h3 className='mb-2'>
        Oh no!... it looks like all pokemons scaped, we are working on catching
        them all again.
      </h3>
      <small>{error.message}</small>
    </>
  )
}

export default Error
