import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
const NAME_PARAM = "name";
const PLACEHOLDER_TEXT = "Search for Pokémon names";

const SearchBar = ({ query, onQueryChange, onClear }) => {
  return (
    <div className='relative'>
      <input
        type="text"
        placeholder={PLACEHOLDER_TEXT}
        value={query}
        onChange={onQueryChange}
        className='w-full pr-10 duration-500 border-b-2 outline-none border-b-gray-300 focus:border-b-slate-700 hover:border-b-slate-700'
      />
      {query && (
        <i
          className='absolute top-0 cursor-pointer right-8'
          onClick={() => {
            onClear();
          }}
        >
          X
        </i>
      )}
    </div>
  );
};

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get(NAME_PARAM);
  const [query, setQuery] = useState(searchQuery || "");

  const getPokemons = async () => {
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      setPokemons(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    setSearchParams(query ? { [NAME_PARAM]: query } : searchParams);
  }, [query]);

  const displayedPokemons = pokemons && searchQuery && searchQuery
    ? pokemons.filter((pokemon) => pokemon?.name.includes(searchQuery.toLowerCase()))
    : pokemons;

  return (
    <div className='py-8'>
      <SearchBar
        query={query}
        onQueryChange={(e) => setQuery(e.target.value)}
        onClear={() => {
          setQuery("");
        }}
      />
      <div className='grid grid-cols-3 gap-16 mt-16'>
        {displayedPokemons.map((pokemon) => (
          <Link key={pokemon.name} to={`${pokemon.name}/abilities`} state={{searchParams: searchParams.toString()}}>
            <div className='p-12 bg-gray-300 rounded-lg shadow-md'>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons.indexOf(pokemon) + 1}.png`}
                alt=''
              />
              <p>{pokemon.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Pokemons;
