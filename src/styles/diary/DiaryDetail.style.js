import { styled } from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ImageBox = styled.div`
  height: 4rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  background-color: #ffca28;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-size: 20px;
`;

export const H3 = styled.h3`
  font-size: 18px;
  font-weight: 500;
  padding: 1rem 0;
  border-bottom: 1px solid #e2e2e2;
`;

export const P = styled.p`
  height: 100%;
  padding: 1rem 0;
  line-height: 1.8;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;
