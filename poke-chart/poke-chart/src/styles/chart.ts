import { styled } from "styled-components";

export const ChartDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  height: 346px;
  padding: 0.5rem 0.5rem 0rem 0.5rem;

  @media (min-width: 1024px) {
    width:50vw
  }
`

export const ChartWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100vw;
  min-height: 5rem;
  padding: 2rem 1rem 3rem 1rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1360px) {
    
  }
`;

export const ChartDivInfoOne = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  height: 20%;
  align-items: center;
  padding: 0.5rem;
`;

export const ChartDivInfoTwo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 30%;
  padding: 0.5rem 2.67rem;

  @media (min-width: 1024px) {
    padding: 0.5rem;
  }
`;
export const ChartDivInfoThree = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 25%;
  padding: 0.5rem 4rem;

  @media (min-width: 1024px) {
    padding: 0.5rem 1.5rem;
  }
`;


