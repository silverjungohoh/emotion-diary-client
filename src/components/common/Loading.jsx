import { styled } from 'styled-components';
import Spinner from '@assets/spinner.gif';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const Image = styled.img`
  width: ${(props) => props.width || '3.2rem'};
  height: auto;
`;

function Loading() {
  return (
    <Wrapper>
      <Image src={Spinner} alt="spinner" />
      <span>Loading...</span>
    </Wrapper>
  );
}

export default Loading;
