import { getPokemonInfo } from '@/api/pokemonApi';
import { PokemonData } from '@/domains/pokemon';
import { Metadata } from 'next';
import Image from 'next/image';

interface Params {
  params: { pokemonName: string };
}

export async function generateMetadata({
  params: { pokemonName },
}: Params): Promise<Metadata> {
  const pokemonData: Promise<PokemonData> = getPokemonInfo(pokemonName);
  const pokemon = await pokemonData;

  return {
    title: pokemon.name,
  };
}

export default async function PokemonPage({ params: { pokemonName } }: Params) {
  const pokemonData: Promise<PokemonData> = getPokemonInfo(pokemonName);
  const pokemon = await pokemonData;

  return (
    <>
      <h2 className='text-center'>Pokemon name: {pokemon.name}</h2>
      <div className='flex justify-center w-full'>
        <Image
          src={pokemon.sprites.front_default || ''}
          width={200}
          height={200}
          alt={`Default back picture of ${pokemon.name}`}
        />
        <Image
          src={pokemon.sprites.back_default || ''}
          width={200}
          height={200}
          alt={`Default back picture of ${pokemon.name}`}
        />
      </div>
      <p>Id: {pokemon.id}</p>
    </>
  );
}
