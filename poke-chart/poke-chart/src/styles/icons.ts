import styled from "styled-components";
import {RxMagnifyingGlass} from "react-icons/rx"
import {TbChartInfographic} from "react-icons/tb"
import {MdCatchingPokemon} from "react-icons/md"
import {BsPersonVcard} from "react-icons/bs"

export const MagnGlassWhite = styled(RxMagnifyingGlass)`
    cursor:pointer;
    color: var(--color-white);
    scale: 1.5;
`
export const ChartIcon = styled(TbChartInfographic)`
    cursor:pointer;
    color: var(--color-secondary);
    scale: 2;
    &:hover {
        color: var(--color-secondary-50);;
      }
`
export const HomeIcon = styled(MdCatchingPokemon)`
    cursor:pointer;
    color: var(--color-secondary);
    scale: 2;
    &:hover {
        color: var(--color-secondary-50);;
      }
`
export const CardIcon = styled(BsPersonVcard)`
    cursor:pointer;
    color: var(--color-secondary);
    scale: 2;
    &:hover {
        color: var(--color-secondary-50);;
      }
`