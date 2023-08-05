import React, { useContext } from "react";
import InputSearch from "./Input";
import { HeaderStyled, InputNavDiv, LogoImg } from "../../styles/header";
import { LogoDiv } from "../../styles/header";
import Logo from "../../assets/pokemon_logo.jpeg";
import { Title } from "../../styles/typography";
import { Outlet } from "react-router-dom";
import HeaderLink from "./Links";
import Footer from "../Footer";
import { HomeContext } from "../../providers/HomeContext";

const Header = () => {
  const { pokemon } = useContext(HomeContext);

  return pokemon ? (
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
  ) : (
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
        </InputNavDiv>
      </HeaderStyled>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
