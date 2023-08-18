import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);

    const getPokemons = async () => {
        try {
            const res = await fetch (BASE_URL);
            const data = await res.json();
            setPokemons(data.results)
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getPokemons();
    },[]);

  return (
    <div className='grid grid-cols-3 gap-16 mt-16'>
        {pokemons && pokemons.map((pokemon, index) => {
            return <Link key={index} to={`/pokemons/${pokemon.name}`}><div  className='p-12 bg-gray-300 rounded-lg shadow-md'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`} alt="" />
            <p>{pokemon.name}</p>
        </div></Link>
        })}
    </div>
  )
}

export default Pokemons;