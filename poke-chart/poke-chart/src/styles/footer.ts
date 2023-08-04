import styled from "styled-components";

export const FooterStyled = styled.header`
  position: fixed;
  bottom: 0;
  width: 100vw;
  min-height: 1rem;
  padding: 0.875rem 2.5rem;
  align-items: center;
  text-align: center;
  background-color: var(--grey-0);
  color: var(--grey-50);
  z-index: 1;

  @media (min-width: 1024px) {
    padding: 0.875rem 2rem;
  }

  @media (min-width: 1360px) {
    padding: 0.875rem 9rem;
    min-height: 3rem;
  }
`;