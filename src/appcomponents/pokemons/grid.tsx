import React from 'react'
import { SimplePokemon } from './interfaces/simple'
import { PokemonCard } from './card';

interface Props {
  pokemons: SimplePokemon[];
}
export const Grid = ({pokemons}:Props) => {
  return (
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((pokemon:SimplePokemon) => (
        // <Image
        //   key={pokemon.id}
        //   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        //   width={100}
        //   height={100}
        //   alt={`${pokemon.name}`}
        // />
        //<span key={pokemon.id}></span>
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
        }
        </div>
  )
}
