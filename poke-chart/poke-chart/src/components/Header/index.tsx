import React from "react";
import InputSearch from "./Input";
import { HeaderStyled, LogoImg } from "../../styles/header";
import { LogoDiv } from "../../styles/header";
import Logo from "../../assets/pokemon_logo.jpeg";
import { Title } from "../../styles/typography";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <LogoDiv>
          <figure>
            <LogoImg src={Logo} alt="Logo Pokémon" />
          </figure>
          <Title>chart</Title>
        </LogoDiv>
        <InputSearch />
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default Header;
