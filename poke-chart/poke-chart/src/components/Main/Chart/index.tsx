import { iProps } from "../../../@types";
import {
  ChartDiv,
  ChartDivInfoOne,
  ChartDivInfoThree,
  ChartDivInfoTwo,
} from "../../../styles/chart";
import {
  AttStat,
  DefStat,
  HPStat,
  SpDefStat,
  SpAttStat,
  SpeedStat,
} from "../../../styles/typography";

const Chart = ({ pokemon }: iProps) => {
  return (
    <ChartDiv>
      <ChartDivInfoOne>
        <HPStat fontSize={pokemon?.stats[0].base_stat}>
          {pokemon?.stats[0].stat.name.toUpperCase()}:{" "}
          {pokemon?.stats[0].base_stat}
        </HPStat>
        <SpeedStat fontSize={pokemon?.stats[5].base_stat}>
          {pokemon?.stats[5].stat.name.toUpperCase()}:{" "}
          {pokemon?.stats[5].base_stat}
        </SpeedStat>
      </ChartDivInfoOne>
      <ChartDivInfoTwo>
        <AttStat fontSize={pokemon?.stats[1].base_stat}>
          {pokemon?.stats[1].stat.name.toUpperCase()}:{" "}
          {pokemon?.stats[1].base_stat}
        </AttStat>
        <SpAttStat fontSize={pokemon?.stats[3].base_stat}>
          {pokemon?.stats[3].stat.name.toUpperCase()}:{" "}
          {pokemon?.stats[3].base_stat}
        </SpAttStat>
      </ChartDivInfoTwo>
      <ChartDivInfoThree>
        <DefStat fontSize={pokemon?.stats[2].base_stat}>
          {pokemon?.stats[2].stat.name.toUpperCase()}:{" "}
          {pokemon?.stats[2].base_stat}
        </DefStat>
        <SpDefStat fontSize={pokemon?.stats[4].base_stat}>
          {pokemon?.stats[4].stat.name.toUpperCase()}:{" "}
          {pokemon?.stats[4].base_stat}
        </SpDefStat>
      </ChartDivInfoThree>
    </ChartDiv>
  );
};

export default Chart;
