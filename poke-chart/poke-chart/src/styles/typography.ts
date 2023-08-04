import styled from "styled-components";
import { iStyledProps } from "../@types";

export const Title = styled.h1`
  font-weight: 800;
  font-size: 4rem;
  font-family: 'Handjet', cursive;
  color: var(--grey-100);
`;

export const Paragraph = styled.p`
  font-weight: 600;
  font-size: 1rem;
  color: var(--color-secondary);
`;

export const CardName = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`;
export const HPStat = styled.h4<iStyledProps>`
  padding-bottom: 2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: ${(props) => props.fontSize! * 0.01 + 1.5}rem;
  color: var(--color-primary);
  transition: transform .5s;
  cursor: pointer;
  &:hover {
    transform: scale(2);
    background: var(--color-white)
    z-index:2;
  }
  
  @media (min-width: 1024px) {
    font-size: ${(props) => props.fontSize! * 0.0125 + 1.5}rem;
  }
`;
export const AttStat = styled.h4<iStyledProps>`
  padding-bottom: 1rem;
  font-weight: 600;
  font-size: ${(props) => props.fontSize! * 0.01 + 1.5}rem;
  color: var(--color-secondary-50);
  transition: transform .5s;
  cursor: pointer;
  &:hover {
    transform: scale(2);
    background: var(--color-white)
    z-index:2;
  }

  @media (min-width: 1024px) {
    font-size: ${(props) => props.fontSize! * 0.0125 + 1.5}rem;
  }
`;
export const DefStat = styled.h4<iStyledProps>`
  font-weight: 600;
  font-size: ${(props) => props.fontSize! * 0.01 + 1.5}rem;
  color: var(--grey-100);
  transition: transform .5s;
  cursor: pointer;
  &:hover {
    transform: scale(2);
    background: var(--color-white)
    z-index:2;
  }

  @media (min-width: 1024px) {
    font-size: ${(props) => props.fontSize! * 0.0125 + 1.5}rem;
  }
`;
export const SpAttStat = styled.h4<iStyledProps>`
  padding-top: 1rem;
  font-weight: 600;
  font-size: ${(props) => props.fontSize! * 0.01 + 1.5}rem;
  color: var(--color-secondary);
  transition: transform .5s;
  cursor: pointer;
  &:hover {
    transform: scale(2);
    background: var(--color-white)
    z-index:2;
  }

  @media (min-width: 1024px) {
    font-size: ${(props) => props.fontSize! * 0.0125 + 1.5}rem;
  }
`;
export const SpDefStat = styled.h4<iStyledProps>`
  padding-top: 2rem;
  font-weight: 600;
  font-size: ${(props) => props.fontSize! * 0.01 + 1.5}rem;
  color: var(--grey-50);
  transition: transform .5s;
  cursor: pointer;
  &:hover {
    transform: scale(2);
    background: var(--color-white)
    z-index:2;
  }

  @media (min-width: 1024px) {
    font-size: ${(props) => props.fontSize! * 0.0125 + 1.5}rem;
  }
`;
export const SpeedStat = styled.h4<iStyledProps>`
  font-weight: 600;
  font-size: ${(props) => props.fontSize! * 0.01 + 1.5}rem;
  color: var(--color-primary-50);
  transition: transform .5s;
  cursor: pointer;
  &:hover {
    transform: scale(2);
    background: var(--color-white)
    z-index:2;
  }

  @media (min-width: 1024px) {
    font-size: ${(props) => props.fontSize! * 0.0125 + 1.5}rem;
  }
`;
