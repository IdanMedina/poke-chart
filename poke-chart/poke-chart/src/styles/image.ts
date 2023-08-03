import { styled } from "styled-components";

export const PokeballImg = styled.img`
  object-fit: scale-down;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  margin-left: 20%;
  margin-bottom: 10%;
  height: 50%;
  width: 50%;
  animation: spinning 3.33333s linear;
  z-index: -1;
  opacity: 0.2;

  @media (min-width: 1024px) {
    margin-left: 25%;
    height: 50%;
    width: 50%;

    @keyframes spinning {
      0% {
        transform: translateX(-100vw);
      }
      24% {
        transform: translateX(0);
      }
      25% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(2160deg);
      }
    }
  }

  @keyframes spinning {
    0% {
      transform: translateY(-100vh);
    }
    24% {
      transform: translateY(0);
    }
    25% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(1080deg);
    }
  }
`;
