import { styled } from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  gap: 2rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid #e2e2e2;
`;

export const ImageBox = styled.div`
  cursor: pointer;
  min-width: 6.5rem;
  height: 4rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  background-color: #ffca28;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const H1 = styled.h1`
  font-size: 18px;
`;
