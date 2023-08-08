import { styled } from "styled-components";

export const BannerDiv = styled.div`
  height: 100%;
  min-width: 100%;
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  align-content: center;

  @media (min-width: 1024px) {
    width: 50vw;
  }
`;

export const BannerPokemon = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  padding: 1rem 2rem;
  gap: 1rem;
  background: var(--color-secondary);
  border: 0.125rem solid var(--color-secondary);
  box-shadow: 0.25rem 0.25rem 0.25rem 0.25rem rgba(80, 60, 30, 0.3);
  border-radius: 1rem;

  @media (min-width: 780px) {
    max-width: 100%;
    height: 24rem;
    flex-direction: row;
    gap: 3rem;
  }
`;

export const BannerImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
`;
export const BannerImg = styled.img`
  object-fit: cover;
  background: var(--grey-0);
  border-radius: 5px;
  height: 100%;
  width: 10rem;
  transition: transform .333s;
  cursor: pointer;
  &:hover {
    transform: scale(3);
    background: var(--color-white)
    z-index:2;
  }
`;
export const BannerInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;
export const BannerAbilityList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: inside;
  color: var(--color-secondary-20);
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 0.5rem;
`;
export const BannerAbilityStat = styled.li`
  width: 100%;
`;
export const AbilitiesDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 4rem;
`;
