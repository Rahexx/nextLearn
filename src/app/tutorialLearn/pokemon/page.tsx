import { getAllPokemons } from '@/api/pokemonApi';
import { Pokedex } from '@/domains/pokemon';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pokedex',
};

export default async function PokemonListPage() {
  const pokedexData: Promise<Pokedex> = getAllPokemons();

  const allPokemon = await pokedexData;

  return (
    <div className='ml-3'>
      <h2 className='text-center uppercase'>Pokedex</h2>
      <ol className='flex flex-wrap	w-full list-none'>
        {allPokemon.results.map((pokemon) => (
          <li className='mx-3 hover:text-blue-300' key={pokemon.name}>
            <Link href={`/tutorialLearn/pokemon/${pokemon.name}`}>
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
