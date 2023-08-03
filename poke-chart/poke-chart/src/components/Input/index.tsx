import React, { useState } from "react";
import { ButtonInput } from "../../styles/buttons";
import { FormStyled } from "../../styles/header";
import { InputSearchStyled } from "../../styles/inputSearch";
import { iProps } from "../../@types";
import { MagnGlassWhite } from "../../styles/icons";

const InputSearch = ({ pokemons, findPokemon }: iProps) => {
  const [data, setData] = useState("");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    findPokemon(data);
  }

  return (
    <FormStyled onSubmit={submit}>
      <InputSearchStyled
        type="text"
        placeholder="Insert pokémon's name"
        list="pokemons"
        onChange={(e) => setData(e.target.value)}
      />
      <datalist id="pokemons">
        {pokemons.map((pokemon) => (
          <option value={pokemon.name} />
        ))}
      </datalist>
      <ButtonInput type="submit">
        <MagnGlassWhite />
      </ButtonInput>
    </FormStyled>
  );
};

export default InputSearch;
