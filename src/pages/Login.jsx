import { Wrapper, FormBox, FieldBox, ButtonBox } from '@styles/Login.style';
import Logo from '@components/common/Logo';
import TextInput from '@components/common/TextInput';
import Button from '@components/common/Button';

function Login() {
  return (
    <Wrapper>
      <Logo />
      <FormBox>
        <FieldBox>
          <label htmlFor="email">이메일</label>
          <TextInput type="email" />
        </FieldBox>
        <FieldBox>
          <label htmlFor="password">비밀번호</label>
          <TextInput type="password" />
        </FieldBox>
        <ButtonBox>
          <Button>로그인</Button>
          <Button $color="blue">회원가입</Button>
        </ButtonBox>
      </FormBox>
    </Wrapper>
  );
}

export default Login;
