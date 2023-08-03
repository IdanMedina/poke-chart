import { iProps } from "../../../@types";
import {
  CardPokemon,
  CardImg,
  CardImgDiv,
  CardInfo,
  CardDiv,
} from "../../../styles/card";
import { CardName, Paragraph } from "../../../styles/typography";

const Card = ({ pokemon }: iProps) => {
  let cardName: string = "";
  let types: string = "";
  if (pokemon) {
    const pokemonName: string | undefined = pokemon.name;
    const pokemonCapitalizedName: string =
      pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    cardName = pokemonCapitalizedName;

    pokemon.types.forEach((type) => (types += ` ${type.type.name}`));
  }
  
  return (
    <CardDiv>
      <CardPokemon>
        <CardImgDiv>
          <CardImg src={pokemon?.sprites} alt={pokemon?.name} />
        </CardImgDiv>
        <CardName>{cardName}</CardName>
        <CardInfo>
          <Paragraph>Height: {pokemon?.height} ft.</Paragraph>
          <Paragraph>Weight: {pokemon?.weight} kg</Paragraph>
          <Paragraph>Type: {types}</Paragraph>
        </CardInfo>
      </CardPokemon>
    </CardDiv>
  );
};

export default Card;
