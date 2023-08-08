import { styled } from "styled-components";

export const BannerDiv = styled.div`
  height: 100%;
  width: 100vw;
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
  width: 75vw;
  align-items: center;
  height: 24rem;
  padding: 1rem 2rem;
  background: var(--color-secondary-20);
  border: 0.125rem solid var(--color-secondary-20);
  box-shadow: 0.25rem 0.25rem 0.25rem 0.25rem rgba(80, 60, 30, 0.3);
  border-radius: 1rem;

  @media (min-width: 1024px) {
    width: 67%;
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
  background: var(--color-primary-20);
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