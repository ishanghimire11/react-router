import React, { useEffect, useState } from "react";
import {
  useParams,
  Outlet,
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";

const Details = () => {
  const [details, setDetails] = React.useState();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();
  const location = useLocation();

  const getDetalis = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.name}`
      );
      const data = await res.json();
      setDetails(data);
    } catch (err) {
      setError(true)
      console.error(err);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getDetalis();
  }, []);

  const urlSearchParams = new URLSearchParams(location.state?.searchParams);
  const persistedLocation = urlSearchParams.toString()
    ? "../../?" + urlSearchParams.toString()
    : "../..";

    // const persistedLocation = location.state?.searchParams.toString()
    // ? "../../?" + location.state?.searchParams.toString()
    // : "../..";

    if(error) {
      return <h1>There was an error to fetch the requested data.</h1>
    }

    return (
    <div className="pt-8">
      <div className="text-left">
        <Link
          to={persistedLocation}
          relative="path"
        >{`<- Back to all pokemons`}</Link>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <div>
          <p>
            {details?.id && (
              <img
                className="mx-auto w-[200px] h-[200px]"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details?.id}.png`}
                alt=""
              />
            )}
          </p>
          <p className="text-2xl font-semibold">{details?.name}</p>
          <nav className="mb-10">
            <ul className="flex justify-center gap-16 pt-16">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold text-red-500" : ""
                  }
                  to={`/pokemons/${params.name}/abilities`}
                >
                  Abilities
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold text-red-500" : ""
                  }
                  to={`/pokemons/${params.name}/dimensions`}
                >
                  Dimensions
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold text-red-500" : ""
                  }
                  to={`/pokemons/${params.name}/stats`}
                >
                  Stats
                </NavLink>
              </li>
            </ul>
          </nav>

          <div>
            <Outlet context={[details]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
