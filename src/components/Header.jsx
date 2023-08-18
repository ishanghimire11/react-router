import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='items-center justify-end w-full text-white bg-slate-700'>
        <div>
            <ul className='flex gap-8'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/pokemons">Pokemons</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header