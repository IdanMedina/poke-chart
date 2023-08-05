import React from "react";
import InputSearch from "./Input";
import { HeaderStyled, InputNavDiv, LogoImg } from "../../styles/header";
import { LogoDiv } from "../../styles/header";
import Logo from "../../assets/pokemon_logo.jpeg";
import { Title } from "../../styles/typography";
import { Outlet } from "react-router-dom";
import HeaderLink from "./Links";
import Footer from "../Footer";

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
        <InputNavDiv>
          <InputSearch />
          <HeaderLink />
        </InputNavDiv>
      </HeaderStyled>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
