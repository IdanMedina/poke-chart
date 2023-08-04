import { iProps } from "../../@types";
import Pokeball from "../../assets/pokeball.png";
import { PokeballImg } from "../../styles/image";
import Card from "./Card";
import Chart from "./Chart";

const Main = ({ pokemon }: iProps) => {
  return pokemon ? (
    <main>
      <Chart pokemon={pokemon} />
      <Card pokemon={pokemon} />
    </main>
  ) : (
    <main>
      <figure>
        <PokeballImg src={Pokeball} alt="Pokeball" />
      </figure>
    </main>
  );
};

export default Main;
