import { Grid, PokemonResponse, SimplePokemon } from '@/appcomponents';

const getPokemons = async (
  limit = 20,
  offset = 0,
): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  //throw new Error('Esto es un error que no debería de suceder')
  return pokemons;
};

export const metadata = {
 title: '151 pokemons',
 description: '151 pokemons',
};
export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className='text-5xl my-2'>Listado estático</span>
      <Grid pokemons={pokemons} />
    </div>
  );
}
