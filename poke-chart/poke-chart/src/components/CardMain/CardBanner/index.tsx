import { useContext } from "react";
import {
  AbilityTitle,
  BannerName,
  ParagraphBanner,
} from "../../../styles/typography";
import { HomeContext } from "../../../providers/HomeContext";
import {
  AbilitiesDiv,
  BannerAbilityList,
  BannerAbilityStat,
  BannerDiv,
  BannerImg,
  BannerImgDiv,
  BannerInfo,
  BannerPokemon,
} from "../../../styles/banner";

const Banner = () => {
  const { pokemon } = useContext(HomeContext);

  let cardName: string = "";
  let types: string = "";
  let abilities: Array<string> = [];
  if (pokemon) {
    const pokemonName: string | undefined = pokemon.name;
    const pokemonCapitalizedName: string =
      pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    cardName = pokemonCapitalizedName;

    pokemon.types.forEach((type) => (types += ` ${type.type.name}`));
    pokemon.abilities.forEach((ability) =>
      abilities.push(ability.ability.name)
    );
  }

  return (
    <BannerDiv>
      <BannerPokemon>
        <BannerImgDiv>
          <BannerImg src={pokemon?.sprites} alt={pokemon?.name} />
        </BannerImgDiv>
        <BannerInfo>
          <BannerName>{cardName}</BannerName>
          <ParagraphBanner>Height: {pokemon?.height} ft.</ParagraphBanner>
          <ParagraphBanner>Weight: {pokemon?.weight} kg</ParagraphBanner>
          <ParagraphBanner>Type: {types}</ParagraphBanner>
        </BannerInfo>
        <AbilitiesDiv>
          <AbilityTitle>Abilities</AbilityTitle>
          <BannerAbilityList>
            {abilities.map((ability) => (
              <BannerAbilityStat>{ability}</BannerAbilityStat>
            ))}
          </BannerAbilityList>
        </AbilitiesDiv>
      </BannerPokemon>
    </BannerDiv>
  );
};

export default Banner;
