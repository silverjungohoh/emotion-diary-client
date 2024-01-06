import Button from '@components/common/Button';
import { Wrapper, TextBox, ButtonBox, H1, P } from '@styles/NotFound.style';

function NotFound() {
  return (
    <Wrapper>
      <TextBox>
        <H1>404</H1>
        <P>Page Not Found</P>
      </TextBox>
      <ButtonBox>
        <Button width="10rem">HOME</Button>
      </ButtonBox>
    </Wrapper>
  );
}

export default NotFound;
