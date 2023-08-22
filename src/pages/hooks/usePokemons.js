const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

export const getPokemons = async () => {
        const res = await fetch(BASE_URL);
        if (!res.ok) {
            throw {
                message: "Failed to fetch Pokemons",
                statusText: res.statusText,
                status: res.status
            };
        }

        const data = await res.json();

        if (Array.isArray(data.results)) {
            return data.results;
        } else {
            throw {
                message: "Data results is not an array",
                data: data.results
            };
        }
    }