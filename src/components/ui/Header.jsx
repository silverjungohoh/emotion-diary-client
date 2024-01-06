import { styled } from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid #e2e2e2;
`;

const Left = styled.div`
  width: 25%;
  display: flex;
  justify-content: start;
`;

const Right = styled.div`
  width: 25%;
  display: flex;
  justify-content: end;
`;

const Text = styled.div`
  width: 50%;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header({ left, right, text }) {
  return (
    <Wrapper>
      <Left>{left}</Left>
      <Text>{text}</Text>
      <Right>{right}</Right>
    </Wrapper>
  );
}

export default Header;
