import React, { useEffect, useState } from 'react'
import { useParams, Outlet, NavLink } from 'react-router-dom'

const Details = () => {
    const [details, setDetails] = useState();
    const [isLoading, setLoading] = useState(false)
    const params = useParams();

    const getDetalis = async () => {
        try {
            setLoading(true)
            const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${params.name}`);
            const data = await res.json();
            setDetails(data);
            setLoading(false);

        } catch(err) {
            console.error(err)
        }
    };

    useEffect(() => {
        getDetalis();
    },[])

  return (
    <div>
        {isLoading ? "Loading..." : 
            <div>
                <p><img className='mx-auto w-[200px] h-[200px]' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details?.id}.png`} alt="" /></p>
                <p className='text-2xl font-semibold'>
                    {details?.name}
                </p>
                <nav>                    
                    <ul className='flex justify-center gap-16 pt-16'>
                        <li>
                            <NavLink className={({isActive}) => isActive ? "font-semibold text-red-500" : ""} to={`/pokemons/${params.name}/${details?.id}/abilities`}>Abilities</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? "font-semibold text-red-500" : ""} to={`/pokemons/${params.name}/${details?.id}/dimensions`}>Dimensions</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? "font-semibold text-red-500" : ""} to={`/pokemons/${params.name}/${details?.id}/stats`}>Stats</NavLink>
                        </li>
                    </ul>
                </nav>

                <div>
                    <Outlet />
                </div>
            </div>
        }
    </div>
  )
}

export default Details