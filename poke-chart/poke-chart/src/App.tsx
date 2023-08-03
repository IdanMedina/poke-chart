import { useState, useEffect } from "react";
import Header from "./components/Header";
import { iPokemon, iPokemonFound } from "./@types";
import { api } from "./services/api";
import axios from "axios";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([] as iPokemon[]);
  const [pokemon, setPokemon] = useState<iPokemonFound>();

  useEffect(() => {
    async function getPokemons() {
      try {
        setLoading(true);
        const response = await api.get("/pokemon?limit=100000&offset=0");
        setPokemons(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getPokemons();
  }, []);
  console.log(pokemons);

  function findPokemon(input: string) {
    const findPokemon = pokemons.find(
      (pokemon: iPokemon) => pokemon.name === input
    );
    if (findPokemon) {
      axios
        .get(findPokemon?.url)
        .then((response) => {
          const pokemonFound: iPokemonFound = {
            id: response.data.id,
            name: response.data.name,
            height: response.data.height,
            weight: response.data.weight,
            sprites: response.data.sprites.other.home.front_default,
            stats: response.data.stats,
            types: response.data.types,
          };
          setPokemon(pokemonFound)
        })
        .catch((error) => {
          console.log(error);
        });
    }
    console.log(pokemon)
    return pokemon
  }

  return (
    <div>
      <>
        <Header
          pokemons={pokemons}
          findPokemon={findPokemon}
        />
        <Main pokemon={pokemon}/>
        <Footer />
      </>
    </div>
  );
}

export default App;
