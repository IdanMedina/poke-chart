import { useContext } from "react";
import Pokeball from "../../assets/pokeball.png";
import { PokeballImg } from "../../styles/image";
import Card from "./Card";
import Chart from "./Chart";
import { HomeContext } from "../../providers/HomeContext";

const Main = () => {
  const { pokemon } = useContext(HomeContext);

  return pokemon ? (
    <main>
      <Chart />
      <Card />
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
