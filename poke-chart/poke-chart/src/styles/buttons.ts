import styled from "styled-components";

export const ButtonInput = styled.button`
  position: absolute;
  right: 0.6rem;
  top: 0.6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0px 20px;
  gap: 10px;
  background-color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  font-size: 0.875rem;
  font-style: normal;
  color: var(--color-white);
  cursor: pointer;
  &:hover {
    background-color: var(--color-primary-50);
    border-color: var(--color-primary-50);
  }
`;
