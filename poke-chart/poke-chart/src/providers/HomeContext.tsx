import { createContext, useEffect, useState } from "react";
import {
  iHomeContext,
  iHomeProviderProps,
  iPokemon,
  iPokemonFound,
} from "../@types";
import axios from "axios";
import { api } from "../services/api";

export const HomeContext = createContext({} as iHomeContext);

export const HomeProvider = ({ children }: iHomeProviderProps) => {
  const [pokemons, setPokemons] = useState([] as iPokemon[]);
  const [pokemon, setPokemon] = useState<iPokemonFound>();

  useEffect(() => {
    async function getPokemons() {
      try {
        const response = await api.get("/pokemon?limit=100000&offset=0");
        setPokemons(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getPokemons();
  }, []);
  
  async function findPokemon(input: string) {
    const findPokemon = pokemons.find(
      (pokemon: iPokemon) => pokemon.name === input
    );
    if (findPokemon) {
      await axios
        .get(findPokemon.url)
        .then((response) => {
          const pokemonFound: iPokemonFound = {
            id: response.data.id,
            name: response.data.name,
            height: response.data.height,
            weight: response.data.weight,
            sprites: response.data.sprites.other.home.front_default,
            stats: response.data.stats,
            types: response.data.types,
            abilities: response.data.abilities
          };
          setPokemon(pokemonFound);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return pokemon;
  }
  
  return (
    <HomeContext.Provider
      value={{ pokemon, pokemons, findPokemon, setPokemon }}
    >
      {children}
    </HomeContext.Provider>
  );
};
