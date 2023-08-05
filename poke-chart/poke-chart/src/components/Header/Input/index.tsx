import React, { useContext, useState } from "react";
import { ButtonInput } from "../../../styles/buttons";
import { FormStyled } from "../../../styles/header";
import { InputSearchStyled } from "../../../styles/inputSearch";
import { MagnGlassWhite } from "../../../styles/icons";
import { HomeContext } from "../../../providers/HomeContext";

const InputSearch = (/* { pokemons, findPokemon }: iProps */) => {
  const { pokemons, findPokemon } = useContext(HomeContext);
  const [data, setData] = useState("");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pokemons && findPokemon) {
      findPokemon(data);
    }
  }

  return pokemons ? (
    <FormStyled onSubmit={submit}>
      <InputSearchStyled
        type="text"
        placeholder="Insert pokémon's name"
        list="pokemons"
        onChange={(e) => setData(e.target.value)}
      />
      <datalist id="pokemons">
        {pokemons.map((pokemon, index) => (
          <option key={index} value={pokemon.name} />
        ))}
      </datalist>
      <ButtonInput type="submit">
        <MagnGlassWhite />
      </ButtonInput>
    </FormStyled>
  ) : (
    <FormStyled onSubmit={submit}>
      <InputSearchStyled
        type="text"
        placeholder="Insert pokémon's name"
        list="pokemons"
        onChange={(e) => setData(e.target.value)}
      />
      <ButtonInput type="submit">
        <MagnGlassWhite />
      </ButtonInput>
    </FormStyled>
  );
};

export default InputSearch;
