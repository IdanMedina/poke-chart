import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 5rem;
  padding: 0.875rem 2.5rem;
  gap: 14px;
  justify-content: space-between;
  align-items: center;
  background-color: var(--grey-0);
  z-index: 1;

  @media (min-width: 1024px) {
    padding: 0.875rem 2rem;
    flex-direction: row;
  }

  @media (min-width: 1360px) {
    padding: 0.875rem 9rem;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  @media (min-width: 1024px) {
    gap: 0.75rem;
    flex-direction: row;
  }
`;
export const LogoImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 100vw;
  height: 10rem;
`;

export const InputNavDiv = styled.div`
  width: 100%;
  
  @media (min-width: 1024px) {
    max-width: 24rem;
  }

  @media (min-width: 1360px) {
    width: 24rem;
  }
`;

export const FormStyled = styled.form`
  position: relative;
  height: 3.75rem;
  width: 100%;

  @media (min-width: 1024px) {
    width: 20rem;
  }

  @media (min-width: 1360px) {
    width: 24rem;
  }
`;

export const NavLink = styled.nav`
  height: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  margin-top: 1.5rem;

  @media (min-width: 1024px) {
    width: 20rem;
  }

  @media (min-width: 1360px) {
    width: 24rem;
  }
`;
