export async function getAllPokemons() {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=156&offset=0',
  );

  if (!res.ok) throw new Error('Failed to fetch pokemon list data');

  return res.json();
}

export async function getPokemonInfo(pokemonName: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

  if (!res.ok) throw new Error('Failed to fetch pokemon info');

  return res.json();
}
