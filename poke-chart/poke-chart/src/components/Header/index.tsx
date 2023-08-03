import React from "react";
import InputSearch from "../Input";
import { HeaderStyled } from "../../styles/header";
import { LogoDiv } from "../../styles/header";
import Logo from "../../assets/pokemon_logo.jpeg"
import { iProps } from "../../@types";
import { Title } from "../../styles/typography";

const Header = ({ pokemons, findPokemon }: iProps) => {
  return (
    <HeaderStyled>
      <LogoDiv>
        <figure>
          <img src={ Logo } alt="Logo Pokémon" />
        </figure>
        <Title>chart</Title>
      </LogoDiv>
      <InputSearch
        pokemons={pokemons}
        findPokemon={findPokemon}
      />
    </HeaderStyled>
  );
};

export default Header;
